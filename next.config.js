/** @type {import('next').NextConfig} */

const nextConfig = {
    experimental: {
        appDir: true,
    },

    env: {
        API_URL: "http://localhost:3000",
        DB_URL: "mongodb+srv://homiemusa:djrefuge@cluster0.fk517ja.mongodb.net/npcdatabase?retryWrites=true&w=majority",
    },
    images: {
        domains: ["res.cloudinary.com"],
    }
};
 
module.exports = nextConfig
