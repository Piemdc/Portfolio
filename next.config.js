/** @type {import('next').NextConfig} */

const {sources} = require("next/dist/compiled/webpack/webpack");
module.exports = {
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ["@svgr/webpack"]
        });

        return config;
    },
    async headers() {
        return [
            {
                source: '/fonts/(.*)',
                headers: [
                    {
                        key: "Cache-Control",
                        value: "public, max-age=31536000, immutable"
                    },
                ]
            }

        ]
    }
}
