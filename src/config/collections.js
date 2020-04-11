import dotenv from 'dotenv';
dotenv.config();

export const audioCollection = process.env.NODE_ENV === 'prod' ? "prod-audio" : "local-audio";
export const badgeCollection = process.env.NODE_ENV === 'prod' ? "prod-badge" : "local-badge";
export const imageCollection = process.env.NODE_ENV === 'prod' ? "prod-image" : "local-image";

