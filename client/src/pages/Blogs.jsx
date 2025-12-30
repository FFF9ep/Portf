import React from 'react';

const BLOG_POSTS = [
    {
        id: 1,
        title: 'Architecture patterns for 2025',
        excerpt: 'Exploring the shift towards island architecture and edge computing in modern web apps.',
        date: 'Dec 30, 2024',
        readTime: '5 min',
        tags: ['Architecture', 'Web'],
        views: '1.2k'
    },
    {
        id: 2,
        title: 'Mastering Tailwind CSS v4',
        excerpt: 'A deep dive into the new engine and how it improves build times and developer experience.',
        date: 'Nov 15, 2024',
        readTime: '8 min',
        tags: ['CSS', 'Frontend'],
        views: '3.4k'
    },
    {
        id: 3,
        title: 'Building scalable Node.js APIs',
        excerpt: 'Best practices for error handling, validation, and database abstraction layers.',
        date: 'Oct 02, 2024',
        readTime: '6 min',
        tags: ['Backend', 'Node.js'],
        views: '900'
    }
];

const Blogs = () => {
    return (
        <div className="space-y-8 animate-in fade-in duration-700">
             <div className="space-y-2">
                <h1 className="text-3xl font-bold text-white">Blogs</h1>
                <p className="text-gray-400">
                    Thoughts on software engineering, design, and technology.
                </p>
            </div>

            <div className="grid gap-4">
                {BLOG_POSTS.map(post => (
                    <div key={post.id} className="group bg-surface border border-border rounded-xl p-6 hover:border-white/20 transition-all cursor-pointer">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-3">
                            <h2 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                                {post.title}
                            </h2>
                            <div className="flex items-center gap-3 text-xs text-gray-500">
                                <span>{post.date}</span>
                                <span>•</span>
                                <span>{post.readTime} read</span>
                            </div>
                        </div>
                        
                        <p className="text-gray-400 mb-4 leading-relaxed">
                            {post.excerpt}
                        </p>

                        <div className="flex items-center justify-between">
                            <div className="flex gap-2">
                                {post.tags.map(tag => (
                                    <span key={tag} className="text-xs font-medium text-gray-500 bg-white/5 px-2 py-1 rounded-md">
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                            <span className="text-xs text-gray-600 flex items-center gap-1">
                                {post.views} views
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blogs;
