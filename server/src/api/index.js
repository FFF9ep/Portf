import { Router } from 'express';
import health from './routes/health.js';
import projects from './routes/projects.js';
import chat from './routes/chat.js';

// guaranteed to get dependencies
export default () => {
    const app = Router();
    health(app);
    projects(app);
    chat(app);

    return app;
}
