import React from 'react';
import { ArrowUpRight, FileDown, Sparkles } from 'lucide-react';
import TechStackGrid from '../components/TechStackGrid';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="space-y-16 animate-in fade-in duration-700">
            {/* HER SECTIOn */}
            <section className="space-y-6">
                <div className="space-y-4">
                    <h1 className="text-3xl font-bold text-white">
                        About
                    </h1>
                    <div className="text-gray-400 space-y-4 leading-relaxed max-w-2xl">
                        <p>
                            I'm a senior frontend engineer and product designer with a passion for building 
                            beautiful, functional, and accessible web applications.
                        </p>
                        <p>
                            Currently enabling 10M+ users to build their own digital presence.
                            I focus on React, Node.js, and modern CSS architecture.
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <button className="inline-flex items-center gap-2 bg-white text-black px-4 py-2 rounded-md font-semibold hover:bg-gray-200 transition-colors">
                        <Sparkles size={18} className="text-yellow-600" />
                        <span>Download Resume</span>
                    </button>
                    <a href="https://github.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white underline decoration-gray-700 underline-offset-4 hover:decoration-white transition-all">
                        Check my work
                    </a>
                </div>
            </section>

            {/* RECENT BLOGS (Mockup) */}
            <section className="space-y-6">
                 <div className="flex items-center justify-between">
                    <h2 className="text-xl font-bold flex items-center gap-2">
                        <span className="text-primary">Recent blogs</span>
                    </h2>
                    <Link to="/blogs" className="text-sm text-gray-500 hover:text-white flex items-center gap-1 transition-colors">
                        View all <ArrowUpRight size={14} />
                    </Link>
                </div>
                
                {/* Horizontal Scroll Container */}
                <div className="flex gap-4 overflow-x-auto pb-4 -mx-4 px-4 sm:mx-0 sm:px-0 no-scrollbar">
                    {[1, 2, 3].map((post) => (
                         <div key={post} className="min-w-[280px] bg-surface border border-border rounded-xl p-4 hover:border-white/20 transition-colors cursor-pointer group">
                            <div className="h-32 bg-zinc-800 rounded-lg mb-4 overflow-hidden relative">
                                {/* Placeholder Image */}
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20 group-hover:scale-105 transition-transform duration-500" />
                            </div>
                            <h3 className="font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                                Architecture patterns for 2025
                            </h3>
                            <div className="flex items-center gap-3 text-xs text-gray-500">
                                <span>Dec 30, 2024</span>
                                <span>•</span>
                                <span>5 min read</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* TECH STACK */}
            <TechStackGrid />

            {/* RECOMMENDATIONS */}
            <section className="space-y-6">
                <h2 className="text-xl font-bold text-primary">Recommendations</h2>
                <div className="grid gap-4">
                    {[1, 2].map((i) => (
                        <div key={i} className="bg-surface border border-border rounded-xl p-6 flex gap-4">
                            <div className="w-12 h-12 rounded-full bg-zinc-800 flex-shrink-0" />
                            <div>
                                <p className="text-gray-300 italic mb-4">"One of the best engineers I've worked with. Delivered complex features ahead of schedule."</p>
                                <div>
                                    <h4 className="font-bold text-white text-sm">Jane Doe</h4>
                                    <p className="text-xs text-gray-500">CTO at TechCorp</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            
            {/* CTA */}
             <section className="py-12 border-t border-border">
                <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/10 border border-white/5 rounded-2xl p-8 text-center space-y-4">
                    <h2 className="text-2xl font-bold text-white">Let's work together!</h2>
                    <p className="text-gray-400 max-w-md mx-auto">
                        I'm currently available for freelance projects and open to full-time opportunities.
                    </p>
                     <Link to="/contacts" className="inline-block bg-primary text-black px-6 py-2 rounded-full font-bold hover:scale-105 transition-transform">
                        Get in touch
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Home;
