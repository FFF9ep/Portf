import mongoose from 'mongoose';
import config from '../config/index.js';

export default async () => {
    try {
        const connection = await mongoose.connect(config.databaseURL, {});
        console.log('✌️ DB loaded and connected!');
        return connection.connection.db;
    } catch (err) {
        console.error('🔥 Error connecting to database:', err);
        throw err;
    }
};
