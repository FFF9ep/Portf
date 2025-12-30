import React from 'react';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
    return (
        <div className="space-y-8 animate-in fade-in duration-700">
             <div className="space-y-2">
                <h1 className="text-3xl font-bold text-white">Contact</h1>
                <p className="text-gray-400">
                    Feel free to reach out for collaborations or just a friendly hello.
                </p>
            </div>

            <div className="grid gap-4 max-w-xl">
                 <a href="mailto:email@example.com" className="group bg-surface border border-border rounded-xl p-4 flex items-center gap-4 hover:border-white/20 transition-all">
                    <div className="p-3 bg-white/5 rounded-lg group-hover:bg-blue-500/20 group-hover:text-blue-400 transition-colors">
                        <Mail size={24} />
                    </div>
                    <div>
                        <h3 className="font-bold text-white">Email</h3>
                        <p className="text-sm text-gray-500">email@example.com</p>
                    </div>
                </a>

                 <a href="https://github.com" target="_blank" rel="noreferrer" className="group bg-surface border border-border rounded-xl p-4 flex items-center gap-4 hover:border-white/20 transition-all">
                    <div className="p-3 bg-white/5 rounded-lg group-hover:bg-purple-500/20 group-hover:text-purple-400 transition-colors">
                        <Github size={24} />
                    </div>
                    <div>
                        <h3 className="font-bold text-white">GitHub</h3>
                        <p className="text-sm text-gray-500">@username</p>
                    </div>
                </a>

                 <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="group bg-surface border border-border rounded-xl p-4 flex items-center gap-4 hover:border-white/20 transition-all">
                    <div className="p-3 bg-white/5 rounded-lg group-hover:bg-blue-600/20 group-hover:text-blue-500 transition-colors">
                        <Linkedin size={24} />
                    </div>
                    <div>
                        <h3 className="font-bold text-white">LinkedIn</h3>
                        <p className="text-sm text-gray-500">Connect with me</p>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default Contact;
