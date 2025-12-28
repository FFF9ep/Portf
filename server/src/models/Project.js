import mongoose from 'mongoose';

const ProjectSchema = new mongoose.Schema({
    // Identification
    slug: { type: String, required: true, unique: true, index: true }, // URL friendly ID
    title: { type: String, required: true },

    // Content
    description: { type: String, required: true }, // Short summary
    content: { type: String }, // Markdown/HTML detailed content
    images: [String], // URLs
    tags: [String], // Tech stack tags

    // Links
    demoUrl: String,
    repoUrl: String, // Link to GitHub

    // GitHub Metadata (synced periodically)
    github: {
        repoId: String,
        stars: { type: Number, default: 0 },
        forks: { type: Number, default: 0 },
        lastCommit: Date,
        language: String,
        topics: [String] // Topics from GitHub
    },

    // State
    isFeatured: { type: Boolean, default: false },
    isVisible: { type: Boolean, default: true },
    sortOrder: { type: Number, default: 0 }
}, { timestamps: true });

export default mongoose.model('Project', ProjectSchema);
