import dotenv from 'dotenv';

export const config = {
  dbUrl: process.env.MONGODB_URI || dotenv.config().parsed.MONGODB_URI,
};
