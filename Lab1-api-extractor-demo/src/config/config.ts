import 'dotenv/config'; 

// 1. Validates ENV variables
if (!process.env.NASA_API_KEY || !process.env.NASA_BASE_URL) {
    throw new Error('Missing Enviroment Variables NASA_API_KEY  or NASA_BASE_URL ');
}

// 2. Export object with env variables.
export const envs = {
    PORT: process.env.PORT || 3000,
    NASA_API_KEY: process.env.NASA_API_KEY,
    NASA_BASE_URL: process.env.NASA_BASE_URL
}