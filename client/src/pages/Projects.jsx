import { useState, useEffect } from 'react';
import { api } from '../services/api';
import ProjectCard from '../components/features/ProjectCard';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const data = await api.getProjects();
                setProjects(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    if (loading) return <div className="text-center py-20">Loading projects...</div>;
    if (error) return <div className="text-center py-20 text-red-500">Error: {error}</div>;

    return (
        <div className="space-y-8">
            <div className="space-y-4">
                <h1 className="text-3xl font-bold">Projects</h1>
                <p className="text-slate-600 dark:text-slate-300">
                    A collection of my work, experiments, and open-source contributions.
                </p>
            </div>

            {projects.length === 0 ? (
                <div className="p-12 text-center bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-dashed border-slate-300 dark:border-slate-700">
                    <p className="text-slate-500">No projects found. Check back later!</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map(project => (
                        <ProjectCard key={project.slug} project={project} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Projects;
