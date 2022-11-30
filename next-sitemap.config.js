/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL,
    generateRobotsTxt: false, // (optional)
    outDir: './out',
};