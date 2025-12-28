import { Outlet, Link } from 'react-router-dom';

const RootLayout = () => {
    return (
        <div className="min-h-screen flex flex-col">
            {/* Navigation */}
            <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-dark-border bg-white/80 dark:bg-dark-bg/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
                <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                    <Link to="/" className="text-xl font-bold tracking-tight text-primary-700 dark:text-primary-400">
                        Portfolio
                    </Link>

                    <nav className="flex items-center gap-6 text-sm font-medium">
                        <Link to="/" className="hover:text-primary-600 dark:hover:text-primary-400">Home</Link>
                        <Link to="/projects" className="hover:text-primary-600 dark:hover:text-primary-400">Projects</Link>
                        <Link to="/about" className="hover:text-primary-600 dark:hover:text-primary-400">About</Link>
                    </nav>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-1 container mx-auto px-4 py-8">
                <Outlet />
            </main>

            {/* Footer */}
            <footer className="border-t border-gray-200 dark:border-dark-border py-6 mt-auto">
                <div className="container mx-auto px-4 text-center text-sm text-gray-500 dark:text-gray-400">
                    © {new Date().getFullYear()} Portfolio. Built with MERN.
                </div>
            </footer>
        </div>
    );
};

export default RootLayout;
