/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        // Add TypeScript support
        config.resolve.extensions.push(".ts", ".tsx");
        config.module.rules.push({
            test: /\.(ts|tsx)$/,
            exclude: /node_modules/,
            use: [
                {
                    loader: "ts-loader",
                    options: {
                        transpileOnly: true,
                    },
                },
            ],
        });

        return config;
    },

    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "cdn.sanity.io",
                port: "",
            },
        ],
    },
};

module.exports = nextConfig;
