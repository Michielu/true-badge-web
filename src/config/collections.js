import dotenv from 'dotenv';
dotenv.config();

/* 'prod', 'test', or 'local' */
const env = process.env.NODE_ENV;

export const audioCollection = env + "-audio";
export const badgeCollection = env + "-badge";
export const imageCollection = env + "-image";