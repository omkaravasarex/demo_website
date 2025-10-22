/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedRoutes: true
  },
  webpack: (config, { dev }) => {
    // Avoid eval-based source maps in development to prevent CSP warnings
    if (dev) config.devtool = 'cheap-module-source-map';
    return config;
  }
};

export default nextConfig;
