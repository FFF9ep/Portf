import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import MobileNav from '../components/MobileNav';

const MainLayout = () => {
    return (
        <div className="min-h-screen bg-background text-primary font-sans selection:bg-white/20">
            <Sidebar />
            
            {/* Main Content Area */}
            {/* Left margin matches sidebar width on desktop (280px) */}
            <main className="lg:pl-[280px] min-h-screen w-full">
                <div className="max-w-4xl mx-auto px-4 py-8 lg:px-12 lg:py-16 pb-24 lg:pb-16">
                    <Outlet />
                </div>
            </main>

            <MobileNav />
        </div>
    );
};

export default MainLayout;
