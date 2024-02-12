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
        config.ignoreWarnings = [
            { module: /node_modules\/node-fetch\/lib\/index\.tsx/ },
            { file: /node_modules\/node-fetch\/lib\/index\.tsx/ },
        ];

        if (isServer) {
            const originalEntry = config.entry;
            config.entry = async () => {
                const entries = await originalEntry();
                // Add support for TypeScript files in the server entry point
                if (entries["main.js"]) {
                    entries["main.js"].unshift("./server.tsx");
                }
                return entries;
            };
        }

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
