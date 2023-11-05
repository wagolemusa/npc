/** @type {import('next').NextConfig} */

const nextConfig = {
    experimental: {
        appDir: true,
    },

    env: {
        ENVIRONMENT_URL: "http://localhost:3000",
        DB_URL: "mongodb+srv://homiemusa:djrefuge@cluster0.fk517ja.mongodb.net/npcdatabase?retryWrites=true&w=majority",
        NEXTAUTH_SECRET: "refugewisemusawagole",
    },
    images: {
        domains: ["res.cloudinary.com"],
    }
};
 
module.exports = nextConfig
