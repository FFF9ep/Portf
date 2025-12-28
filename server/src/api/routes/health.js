import { Router } from 'express';

const route = Router();

export default (app) => {
    app.use('/health', route);

    route.get('/', (req, res) => {
        res.status(200).json({ status: 'OK', uptime: process.uptime() });
    });
};
