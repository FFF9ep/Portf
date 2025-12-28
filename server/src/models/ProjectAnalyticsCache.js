import mongoose from 'mongoose';

const ProjectAnalyticsCacheSchema = new mongoose.Schema({
    project: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project',
        required: true,
        unique: true,
        index: true
    },

    // Aggregate Counters
    totalViews: { type: Number, default: 0 },
    uniqueVisitors: { type: Number, default: 0 },

    // Time-based Windows (Extensible)
    // We use strict sub-documents for known windows, Map for dynamic if needed
    last24Hours: {
        views: { type: Number, default: 0 },
        visitors: { type: Number, default: 0 },
        lastUpdated: Date // For TTL/Reset logic
    },

    // Extensible Data Store
    // Allows storage of arbitrary metrics (e.g., specific interactions)
    customMetrics: {
        type: Map,
        of: Number
    }
}, { timestamps: true });

export default mongoose.model('ProjectAnalyticsCache', ProjectAnalyticsCacheSchema);
