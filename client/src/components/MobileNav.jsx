import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Briefcase, FileText, Globe, Mail, MessageSquare } from 'lucide-react';
import clsx from 'clsx';

const MobileNav = () => {
    const navItems = [
        { icon: Home, label: 'Home', path: '/' },
        { icon: FileText, label: 'Resume', path: '/resume' }, // Shortened for mobile space
        { icon: Briefcase, label: 'Projects', path: '/projects' },
        { icon: Globe, label: 'Blogs', path: '/blogs' },
        { icon: Mail, label: 'Contact', path: '/contacts' },
         { icon: MessageSquare, label: 'Chat', path: '/chats' },
    ];

    return (
        <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-surface/80 backdrop-blur-md border border-white/10 rounded-full px-4 py-3 flex items-center gap-2 lg:hidden z-50 shadow-2xl">
            {navItems.map((item) => (
                <NavLink
                    key={item.path}
                    to={item.path}
                    className={({ isActive }) => clsx(
                        "p-2 rounded-full transition-all duration-200",
                        isActive 
                            ? "bg-white text-black scale-110" 
                            : "text-gray-400 hover:text-white hover:bg-white/10"
                    )}
                    title={item.label}
                >
                    <item.icon size={20} />
                </NavLink>
            ))}
        </nav>
    );
};

export default MobileNav;
