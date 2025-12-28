import { Router } from 'express';
import { Project, ProjectAnalyticsCache } from '../../models/index.js';
import cacheService from '../../services/cache.js';
import githubService from '../../services/github.js';
import analyticsService from '../../services/analytics.js';

const route = Router();

export default (app) => {
    app.use('/projects', route);

    // GET /projects - List all projects
    route.get('/', async (req, res, next) => {
        try {
            const projects = await Project.find({ isVisible: true })
                .select('title slug description tags github images sortOrder')
                .sort({ sortOrder: 1, createdAt: -1 })
                .lean();

            return res.json(projects);
        } catch (e) {
            return next(e);
        }
    });

    // GET /projects/:slug - Get detailed project
    route.get('/:slug', async (req, res, next) => {
        try {
            // 1. Fetch Basic Project (Fast DB Look up)
            let project = await Project.findOne({ slug: req.params.slug }).lean();

            if (!project) {
                return res.status(404).json({ message: 'Project not found' });
            }

            // 2. Check Cache for extra stats
            // Architecture Note: We use a "Cache-First, Fallback-Last" strategy here.
            // Priority 1: In-Memory Cache (Fastest, prevents API rate limits)
            // Priority 2: Live API Fetch (Fresh data, updates DB)
            // Priority 3: Database (Fallback if APIs fail, e.g. GitHub down)
            const cacheKey = `project_stats:${project.slug}`;
            const cachedStats = cacheService.get(cacheKey);

            let externalStats = {};

            if (cachedStats) {
                // Cache Hit
                externalStats = cachedStats;
                // Merge cached stats back into return object
                // We override DB metrics with Live/Cached metrics if available
                if (externalStats.github) project.github = { ...project.github, ...externalStats.github };
                if (externalStats.analytics) project.analytics = externalStats.analytics;

            } else {
                // Cache Miss - Fetch & Refresh
                const [githubRes, analyticsRes] = await Promise.allSettled([
                    githubService.getRepoStats(project.repoUrl),
                    analyticsService.getProjectStats(project.slug)
                ]);

                const newStats = {};

                // Process GitHub
                if (githubRes.status === 'fulfilled' && githubRes.value) {
                    newStats.github = githubRes.value;
                    // Asynchronously update DB for persistence/long-term fallback
                    Project.updateOne({ _id: project._id }, { github: githubRes.value }).exec(); // Fire & Forget

                    // Merge for response
                    project.github = { ...project.github, ...newStats.github };
                }

                // Process Analytics
                if (analyticsRes.status === 'fulfilled' && analyticsRes.value) {
                    newStats.analytics = analyticsRes.value;
                    // Merge for response
                    project.analytics = newStats.analytics;
                }

                // Update Cache (TTL 5 minutes)
                if (Object.keys(newStats).length > 0) {
                    cacheService.set(cacheKey, newStats, 300);
                }
            }

            // 3. Last fallback (DB Analytics) if we didn't get fresh ones
            // If we didn't set project.analytics from logic above, check existing Cache Model
            if (!project.analytics) {
                const dbAnalytics = await ProjectAnalyticsCache.findOne({ project: project._id }).lean();
                project.analytics = dbAnalytics || null;
            }

            return res.json(project);

        } catch (e) {
            return next(e);
        }
    });
};
