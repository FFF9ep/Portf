import { Router } from 'express';
import { body, validationResult } from 'express-validator';
import { ChatSession } from '../../models/index.js';
import aiService from '../../services/ai.js';
import { v4 as uuidv4 } from 'uuid';
import { chatLimiter } from '../middlewares/rateLimiter.js';

const route = Router();

export default (app) => {
    app.use('/chat', route);

    /**
     * POST /chat
     * Body: { message: string, sessionId?: string }
     */
    route.post('/',
        chatLimiter,
        [
            body('message').trim().notEmpty().withMessage('Message is required').isLength({ max: 500 }).withMessage('Message too long'),
            body('sessionId').optional().isUUID().withMessage('Invalid Session ID')
        ],
        async (req, res, next) => {
            try {
                // 1. Validation Check
                const errors = validationResult(req);
                if (!errors.isEmpty()) {
                    return res.status(400).json({ errors: errors.array() });
                }

                const { message } = req.body;
                let { sessionId } = req.body;

                // 2. Retrieve or Create Session
                if (!sessionId) {
                    sessionId = uuidv4();
                }

                let session = await ChatSession.findOne({ sessionId });
                if (!session) {
                    session = new ChatSession({
                        sessionId,
                        visitorsId: req.ip, // Simple IP logging for demo
                        messages: []
                    });
                }

                // 3. Add User Message
                session.messages.push({ role: 'user', content: message });

                // 4. Generate Response
                // Get last 10 messages for history
                const history = session.messages.slice(-10);
                const responseText = await aiService.generateResponse(message, history);

                // 5. Add Assistant Message
                session.messages.push({ role: 'assistant', content: responseText });
                await session.save();

                return res.json({
                    response: responseText,
                    sessionId
                });

            } catch (e) {
                return next(e);
            }
        });
};
