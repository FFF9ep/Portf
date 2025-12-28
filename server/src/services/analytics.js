class AnalyticsService {
    // Stub for real implementation (e.g., Plausible, GA, or custom DB aggregation)
    async getProjectStats(slug) {
        // Simulate API latency
        // await new Promise(resolve => setTimeout(resolve, 100));

        // Return mock data for now
        const history = Array.from({ length: 7 }, (_, i) => {
            const date = new Date();
            date.setDate(date.getDate() - (6 - i));
            return {
                date: date.toLocaleDateString('en-US', { weekday: 'short' }),
                views: Math.floor(Math.random() * 500) + 50,
                visitors: Math.floor(Math.random() * 300) + 20
            };
        });

        return {
            uniqueVisitors: Math.floor(Math.random() * 1000) + 50,
            totalViews: Math.floor(Math.random() * 5000) + 100,
            history
        };
    }
}

export default new AnalyticsService();
