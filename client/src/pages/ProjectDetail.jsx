import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { api } from '../services/api';
import AnalyticsSection from '../components/features/AnalyticsSection';

const ProjectDetail = () => {
    const { slug } = useParams();
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProject = async () => {
            try {
                const data = await api.getProject(slug);
                setProject(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProject();
    }, [slug]);

    if (loading) return <div className="text-center py-20">Loading...</div>;
    if (error) return <div className="text-center py-20 text-red-500">Error: {error}</div>;
    if (!project) return <div className="text-center py-20">Project not found</div>;

    return (
        <article className="max-w-4xl mx-auto space-y-12">
            {/* Header */}
            <header className="space-y-6 text-center border-b border-gray-200 dark:border-dark-border pb-12">
                <div className="space-y-2">
                    <Link to="/projects" className="text-primary-600 dark:text-primary-400 text-sm font-medium hover:underline">
                        ← Back to Projects
                    </Link>
                    <h1 className="text-4xl md:text-5xl font-bold">{project.title}</h1>
                </div>

                {/* Links */}
                <div className="flex justify-center gap-4">
                    {project.repoUrl && (
                        <a href={project.repoUrl} target="_blank" rel="noopener noreferrer"
                            className="px-4 py-2 text-sm font-medium border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors">
                            GitHub Repo
                        </a>
                    )}
                    {project.demoUrl && (
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer"
                            className="px-4 py-2 text-sm font-medium bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
                            Live Demo
                        </a>
                    )}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap justify-center gap-2">
                    {project.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-sm font-mono">
                            {tag}
                        </span>
                    ))}
                </div>
            </header>

            {/* Case Study Content */}
            <div className="grid md:grid-cols-[2fr_1fr] gap-12">
                <div className="space-y-12">
                    {/* Problem */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100">The Problem</h2>
                        <div className="prose dark:prose-invert max-w-none text-slate-600 dark:text-slate-300">
                            {/* Placeholder for now - assuming content field might have this or we structure it in DB later */}
                            <p>{project.description}</p>
                            <p>
                                (Strict Case Study Structure Placeholder: Detailed description of the problem being solved would go here.)
                            </p>
                        </div>
                    </section>

                    {/* Solution */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100">The Solution</h2>
                        <div className="prose dark:prose-invert max-w-none text-slate-600 dark:text-slate-300">
                            <p>
                                (Strict Case Study Structure Placeholder: Explanation of the technical solution and architecture.)
                            </p>
                            {project.content && <div dangerouslySetInnerHTML={{ __html: project.content }} />}
                        </div>
                    </section>
                </div>

                {/* Sidebar / Results */}
                <div className="space-y-8">
                    <section className="p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 space-y-4">
                        <h3 className="font-bold text-lg">Results & Impact</h3>
                        <ul className="space-y-2 text-slate-600 dark:text-slate-300 text-sm">
                            <li>🚀 High Availability & Performance</li>
                            <li>⭐ {project.github?.stars || 0} GitHub Stars</li>
                            <li>🍴 {project.github?.forks || 0} Forks</li>
                        </ul>
                    </section>

                    {/* Analytics Visualization */}
                    {project.analytics && (
                        <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
                            <AnalyticsSection analytics={project.analytics} />
                        </div>
                    )}

                    <section className="space-y-2">
                        <h3 className="font-bold text-lg">Tech Stack</h3>
                        <div className="flex flex-wrap gap-2">
                            {project.tags.map(tag => (
                                <div key={tag} className="flex items-center gap-2 text-slate-600 dark:text-slate-300 text-sm">
                                    <span className="w-1.5 h-1.5 bg-primary-500 rounded-full"></span>
                                    {tag}
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </article>
    );
};

export default ProjectDetail;
