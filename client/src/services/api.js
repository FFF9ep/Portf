const API_URL = 'http://localhost:5000/api';

export const api = {
    getProjects: async () => {
        const res = await fetch(`${API_URL}/projects`);
        if (!res.ok) throw new Error('Failed to fetch projects');
        return res.json();
    },

    getProject: async (slug) => {
        const res = await fetch(`${API_URL}/projects/${slug}`);
        if (!res.ok) throw new Error('Failed to fetch project');
        return res.json();
    },

    sendChatMessage: async (message, sessionId) => {
        const res = await fetch(`${API_URL}/chat`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message, sessionId }),
        });

        if (!res.ok) {
            const errData = await res.json().catch(() => ({}));
            throw new Error(errData.errors?.[0]?.msg || errData.message || 'Failed to send message');
        }
        return res.json();
    }
};
