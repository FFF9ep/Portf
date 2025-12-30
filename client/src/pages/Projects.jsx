import { useState, useEffect } from 'react';
import { api } from '../services/api';
import ProjectCard from '../components/ProjectCard';

const MOCK_PROJECTS = [
    {
        slug: 'project-1',
        title: 'AI Portfolio Builder',
        description: 'A React-based portfolio generator with integrated OpenAI assistance for content generation.',
        featured: true,
        tech: ['React', 'Node.js', 'OpenAI', 'MongoDB'],
        github: 'https://github.com',
        link: 'https://demo.com'
    },
    {
        slug: 'project-2',
        title: 'E-Commerce Dashboard',
        description: 'Real-time analytics dashboard for online stores with inventory management and sales tracking.',
        featured: false,
        tech: ['Next.js', 'PostgreSQL', 'Tailwind CSS'],
        github: 'https://github.com',
    },
    {
        slug: 'project-3',
        title: 'Task Master',
        description: 'Collaborative task management tool used by over 500 teams daily.',
        featured: false,
        tech: ['Vue', 'Firebase', 'PWA'],
        link: 'https://demo.com'
    }
];

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                // Try fetching from API
                const data = await api.getProjects();
                if (data && data.length > 0) {
                    setProjects(data);
                } else {
                    // Fallback to mock data if API returns empty
                    setProjects(MOCK_PROJECTS);
                }
            } catch (err) {
                console.warn('API fetch failed, utilizing mock data:', err);
                setProjects(MOCK_PROJECTS);
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    if (loading) return (
        <div className="flex items-center justify-center min-h-[400px]">
             <div className="animate-pulse text-gray-500">Loading works...</div>
        </div>
    );

    return (
        <div className="space-y-8 animate-in fade-in duration-700">
            <div className="space-y-2">
                <h1 className="text-3xl font-bold text-white">Projects</h1>
                <p className="text-gray-400">
                    A collection of my work, experiments, and open-source contributions.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map(project => (
                    <ProjectCard key={project.slug} project={project} />
                ))}
            </div>
        </div>
    );
};

export default Projects;
