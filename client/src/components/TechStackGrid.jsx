import React from 'react';
import { Layout, Smartphone, Database, Globe, Server, Code, Terminal, Cpu } from 'lucide-react';

const TechStackGrid = () => {
    // In a real app, these would probably be SVGs of specific tech (React, Node, etc.)
    // Using Lucide icons as generic placeholders matching the "icon grid" aesthetic
    const stacks = [
        { icon: Code, label: "Frontend" },
        { icon: Server, label: "Backend" },
        { icon: Database, label: "Database" },
        { icon: Smartphone, label: "Mobile" },
        { icon: Globe, label: "Web3" },
        { icon: Terminal, label: "DevOps" },
        { icon: Layout, label: "UI/UX" },
        { icon: Cpu, label: "Systems" },
    ];

    return (
        <section className="space-y-6">
            <h2 className="text-xl font-bold flex items-center gap-2">
                <span className="text-primary">Tech Stacks</span>
                <span className="text-gray-500 font-normal">I have used</span>
            </h2>
            
            <div className="grid grid-cols-4 sm:grid-cols-8 gap-4">
                {stacks.map((stack, idx) => (
                    <div 
                        key={idx}
                        className="aspect-square bg-surface border border-border rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/5 hover:border-white/20 transition-all duration-300 group cursor-default"
                        title={stack.label}
                    >
                        <stack.icon 
                            size={24} 
                            strokeWidth={1.5}
                            className="group-hover:scale-110 transition-transform"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TechStackGrid;
