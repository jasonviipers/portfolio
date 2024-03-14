/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.js");

/** @type {import("next").NextConfig} */
const config = {
    images: {
        remotePatterns: [
            {
				protocol: "http",
				hostname: "localhost",
			},
			{
				protocol: "https",
				hostname: "aceternity.com",
			},
            {
                protocol: "https",
                hostname: "via.placeholder.com"
            }
        ]
        
    },
};

export default config;
