import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
    return (
        <Link
            to={`/projects/${project.slug}`}
            className="group bg-white dark:bg-dark-surface border border-gray-200 dark:border-dark-border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
        >
            <div className="p-6 space-y-4">
                <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                        {project.title}
                    </h3>
                    {/* Metric Placeholder */}
                    {project.github && (
                        <div className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
                            <span>★ {project.github.stars || 0}</span>
                        </div>
                    )}
                </div>

                <p className="text-slate-600 dark:text-slate-300 line-clamp-3">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map(tag => (
                        <span key={tag} className="px-2 py-1 text-xs bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-md font-mono">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </Link>
    );
};

export default ProjectCard;
