import mongoose from 'mongoose';

const MessageSchema = new mongoose.Schema({
    role: { type: String, enum: ['user', 'assistant', 'system'], required: true },
    content: { type: String, required: true },
    timestamp: { type: Date, default: Date.now },
    // Optional: Metadata for specific message (e.g. citations)
    metadata: mongoose.Schema.Types.Mixed
});

const ChatSessionSchema = new mongoose.Schema({
    sessionId: { type: String, required: true, unique: true, index: true }, // UUID from client

    // Context
    visitorId: String, // Hashed IP or Fingerprint
    userAgent: String,

    messages: [MessageSchema],

    // status
    isArchived: { type: Boolean, default: false }
}, { timestamps: true });

// Index for cleanup or analytics query
ChatSessionSchema.index({ createdAt: 1 }, { expireAfterSeconds: 60 * 60 * 24 * 30 }); // 30 Day TTL example

export default mongoose.model('ChatSession', ChatSessionSchema);
