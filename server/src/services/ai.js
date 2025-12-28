import OpenAI from 'openai';
import { buildContext } from '../lib/context.js';

class AiService {
    constructor() {
        this.openai = new OpenAI({
            apiKey: process.env.OPENAI_API_KEY,
        });
    }

    async generateResponse(message, history = []) {
        try {
            const systemContext = await buildContext();

            const messages = [
                { role: 'system', content: systemContext },
                ...history.map(msg => ({ role: msg.role, content: msg.content })),
                { role: 'user', content: message }
            ];

            const completion = await this.openai.chat.completions.create({
                messages: messages,
                model: 'gpt-4o', // or gpt-3.5-turbo if cost is concern, user asked for GPT-4.x
                max_tokens: 500,
            });

            return completion.choices[0].message.content;

        } catch (error) {
            //   console.error('OpenAI Error:', error);
            throw new Error('Failed to generate AI response');
        }
    }
}

export default new AiService();
