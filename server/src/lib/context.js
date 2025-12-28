import { Profile, Project, ProjectAnalyticsCache } from '../models/index.js';

export const buildContext = async () => {
    try {
        // 1. Fetch Profile
        const profile = await Profile.findOne().lean();

        // 2. Fetch Projects (Top 5 featured or sorted)
        const projects = await Project.find({ isVisible: true })
            .sort({ isFeatured: -1, sortOrder: 1 })
            .limit(5)
            .lean();

        // 3. Summarize Projects
        // Optimization: We truncate descriptions to prevent large contexts from consuming too many tokens.
        // This is crucial for keeping OpenAI costs low while maintaining relevance.
        const projectSummaries = projects.map(p => {
            const stats = p.github || {};
            const cleanDesc = p.description ? p.description.substring(0, 150) + (p.description.length > 150 ? '...' : '') : 'No description';

            return `- ${p.title} (${p.slug}): ${cleanDesc}. Stack: ${p.tags.join(', ')}. GitHub: ${stats.stars || 0} Stars.`;
        }).join('\n');

        // 4. Construct System Prompt Context
        const context = `
    Context Information:
    
    About the Developer:
    Name: ${profile?.name || 'The Developer'}
    Title: ${profile?.title || 'Full Stack Developer'}
    Bio: ${profile?.bio || 'Passionate about building scalable web apps.'}
    Skills: ${profile?.skills?.join(', ') || 'React, Node.js, MongoDB'}
    
    Key Projects:
    ${projectSummaries}
    
    Instructions:
    You are an AI assistant for this developer's portfolio. 
    Answer questions about their work, skills, and projects based strictly on the context above.
    If asked about something not in the context, you can use general programming knowledge but mention you don't have specific info on that regarding this developer.
    Be professional, concise, and helpful.
    `;

        return context;

    } catch (error) {
        console.error('Error building context:', error);
        return 'Error loading context. Please answer generally.';
    }
};
