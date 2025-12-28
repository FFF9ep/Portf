import mongoose from 'mongoose';

const ProfileSchema = new mongoose.Schema({
    name: { type: String, required: true },
    title: { type: String, required: true },
    bio: { type: String, required: true },
    avatarUrl: { type: String }, // URL to image
    resumeUrl: { type: String },
    socials: {
        github: String,
        linkedin: String,
        twitter: String,
        email: String
    },
    skills: [String], // Simple array of strings
    metadata: { type: Map, of: String } // Extensible fields
}, { timestamps: true });

export default mongoose.model('Profile', ProfileSchema);
