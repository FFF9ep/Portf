import dotenv from 'dotenv';

// Load .env file
const envFound = dotenv.config();

if (envFound.error) {
  // This error should crash whole process in production
  // For dev, we might just log it if we rely on defaults
  console.warn("⚠️  Couldn't find .env file  ⚠️");
}

export default {
  port: parseInt(process.env.PORT || '5000', 10),
  databaseURL: process.env.MONGODB_URI,
  logs: {
    level: process.env.LOG_LEVEL || 'silly',
  },
  isDev: process.env.NODE_ENV === 'development',
};
