import axios from 'axios';

class GithubService {
    constructor() {
        this.baseUrl = 'https://api.github.com';
        // Optional: Load token if available for higher rate limits
        this.token = process.env.GITHUB_TOKEN;
    }

    _getHeaders() {
        const headers = {
            'Accept': 'application/vnd.github.v3+json',
            'User-Agent': 'Portfolio-App'
        };
        if (this.token) {
            headers['Authorization'] = `token ${this.token}`;
        }
        return headers;
    }

    _parseRepoUrl(url) {
        if (!url) return null;
        try {
            // Handles https://github.com/user/repo
            const parts = new URL(url).pathname.split('/').filter(Boolean);
            if (parts.length >= 2) return { owner: parts[0], repo: parts[1] };
            return null;
        } catch {
            return null;
        }
    }

    async getRepoStats(repoUrl) {
        const repoInfo = this._parseRepoUrl(repoUrl);
        if (!repoInfo) return null;

        try {
            const { data } = await axios.get(
                `${this.baseUrl}/repos/${repoInfo.owner}/${repoInfo.repo}`,
                { headers: this._getHeaders() }
            );

            // Fetch languages
            const languagesRes = await axios.get(
                data.languages_url,
                { headers: this._getHeaders() }
            );

            return {
                repoId: String(data.id),
                stars: data.stargazers_count,
                forks: data.forks_count,
                lastCommit: data.pushed_at,
                language: data.language,
                topics: data.topics || [],
                languages: Object.keys(languagesRes.data)
            };
        } catch (error) {
            //   console.error('GitHub API Error:', error.message);
            // Fail gracefully -> return null so we use DB fallback
            return null;
        }
    }
}

export default new GithubService();
