import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Briefcase, FileText, Globe, Mail, MessageSquare } from 'lucide-react';
import clsx from 'clsx';

const Sidebar = () => {
    const navItems = [
        { icon: Home, label: 'Home', path: '/' },
        { icon: FileText, label: 'Resume', path: '/resume' },
        { icon: Briefcase, label: 'Projects', path: '/projects' },
        { icon: Globe, label: 'Blogs', path: '/blogs' },
        { icon: Mail, label: 'Contacts', path: '/contacts' },
        { icon: MessageSquare, label: 'Chats', path: '/chats' },
    ];

    return (
        <aside className="w-[280px] h-screen fixed left-0 top-0 hidden lg:flex flex-col border-r border-border bg-background p-6">
            {/* Profile Section */}
            <div className="flex flex-col gap-4 mb-8">
                <div className="w-16 h-16 rounded-full overflow-hidden bg-surface border border-border">
                    <img 
                        src="https://github.com/fff9EP.png" 
                        alt="Profile" 
                        className="w-full h-full object-cover"
                    />
                </div>
                <div>
                    <h2 className="text-xl font-bold text-primary">User Name</h2>
                    <p className="text-sm text-gray-400">@username</p>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-border w-fit">
                   <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    <span className="text-xs font-medium text-gray-300">Available for work</span>
                </div>
            </div>

            {/* Navigation */}
            <nav className="flex-1">
                <ul className="space-y-1">
                    {navItems.map((item) => (
                        <li key={item.path}>
                            <NavLink
                                to={item.path}
                                className={({ isActive }) => clsx(
                                    "flex items-center gap-3 px-3 py-2 rounded-lg transition-colors text-sm font-medium",
                                    isActive 
                                        ? "bg-surface text-primary" 
                                        : "text-gray-400 hover:text-primary hover:bg-surface/50"
                                )}
                            >
                                <item.icon size={18} />
                                {item.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Footer / Theme Toggle Area */}
            <div className="mt-auto pt-6 border-t border-border">
                <p className="text-xs text-gray-500">© 2024 Portfolio</p>
            </div>
        </aside>
    );
};

export default Sidebar;
