import mongoose from 'mongoose';
import config from '../config/index.js';

export default async () => {
    try {
        const connection = await mongoose.connect(config.databaseURL, {});
        console.log('✌️ DB loaded and connected!');
        return connection.connection.db;
    } catch (err) {
        // Check for specific connection errors (ECONNREFUSED)
        // If we are in dev and cannot connect to local DB, try in-memory
        if (err.message && err.message.includes('ECONNREFUSED') && process.env.NODE_ENV === 'development') {
            console.warn('⚠️  Could not connect to local MongoDB. Falling back to in-memory database.');
            console.warn('⚠️  Data will not be persisted after server restart.');

            try {
                // Dynamic import to avoid production dependency
                const { MongoMemoryServer } = await import('mongodb-memory-server');
                const mongod = await MongoMemoryServer.create();
                const uri = mongod.getUri();

                console.log(`✨ In-memory MongoDB running at: ${uri}`);

                const connection = await mongoose.connect(uri, {});
                return connection.connection.db;
            } catch (innerErr) {
                console.error('🔥 Error starting in-memory database:', innerErr);
                throw err; // Throw original error if fallback fails
            }
        }

        console.error('🔥 Error connecting to database:', err);
        throw err;
    }
};
