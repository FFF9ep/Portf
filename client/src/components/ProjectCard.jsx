import React from 'react';
import { Github, ExternalLink, Pin } from 'lucide-react';

const ProjectCard = ({ project }) => {
    return (
        <div className="group bg-surface border border-border rounded-xl  overflow-hidden hover:border-white/20 transition-all duration-300 flex flex-col h-full">
            {/* Image Cover */}
            <div className="h-48 overflow-hidden relative">
                {/* Mock Image / Placeholder */}
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-900 group-hover:scale-105 transition-transform duration-500" />
                
                {/* Featured Badge */}
                {project.featured && (
                    <div className="absolute top-3 left-3 bg-blue-500/10 backdrop-blur-md border border-blue-500/20 text-blue-400 text-xs font-bold px-2 py-1 rounded-md flex items-center gap-1">
                        <Pin size={12} className="fill-blue-400" />
                        Featured
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                        {project.title}
                    </h3>
                    <div className="flex gap-2">
                         {project.github && (
                            <a href={project.github} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                <Github size={18} />
                            </a>
                        )}
                        {project.link && (
                            <a href={project.link} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                <ExternalLink size={18} />
                            </a>
                        )}
                    </div>
                </div>

                <p className="text-sm text-gray-400 mb-6 line-clamp-3">
                    {project.description}
                </p>

                {/* Tech Tags */}
                <div className="mt-auto flex flex-wrap gap-2">
                    {project.tech?.map((tech, i) => (
                        <span key={i} className="text-xs font-medium text-gray-500 bg-white/5 border border-white/5 px-2 py-1 rounded-md">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
