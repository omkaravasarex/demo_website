/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedRoutes: true,
  },
  // Headers to enforce a strict CSP in production and a relaxed one in development
  async headers() {
    const isDev = process.env.NODE_ENV !== 'production';
    const cspParts = [
      "default-src 'self'",
      // Allow eval only in development to support some tooling if necessary
      `script-src 'self'${isDev ? " 'unsafe-eval' 'unsafe-inline'" : ''} https: http:` ,
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob:",
      "font-src 'self' data:",
      "connect-src 'self' https: http:",
      "frame-ancestors 'self'",
      "base-uri 'self'",
      "form-action 'self'",
      "object-src 'none'",
    ];
    const csp = cspParts.join('; ');

    return [
      {
        source: '/:path*',
        headers: [
          { key: 'Content-Security-Policy', value: csp },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ];
  },
  webpack: (config, { dev }) => {
    // Avoid eval-based source maps in development to prevent CSP warnings
    if (dev) config.devtool = 'cheap-module-source-map';
    return config;
  },
};

export default nextConfig;
