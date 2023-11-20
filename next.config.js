/** @type {import('next').NextConfig} */

const nextConfig = {
    experimental: {
        appDir: true,
    },

    env: {
        ENVIRONMENT_URL: "http://localhost:3000",
        DB_URL: "mongodb+srv://homiemusa:djrefuge@cluster0.fk517ja.mongodb.net/npcdatabase?retryWrites=true&w=majority",
        CLOUND_NAME:"xycoders",
        CLOUDINARY_API_KEY: "837887428819121",
        CLOUDINARY_API_SECRET: "fxqLgjYaglPh0PViyCbB-cseWoE",
        NEXTAUTH_SECRET: "refugewisemusawagole",
    },
    images: {
        domains: ["res.cloudinary.com"],
    }
};
 
module.exports = nextConfig
