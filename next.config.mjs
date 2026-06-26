/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Force next-themes to be bundled into app code (not a lazy external chunk).
  // This fixes the Turbopack "module factory not available" error.
  transpilePackages: ['next-themes'],
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // SAMEORIGIN (not DENY) so the resume page can embed its own PDF;
          // still blocks other sites from framing us (clickjacking protection).
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
      {
        source: "/assets/(.*)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      // NOTE: Do NOT add a Cache-Control header for /_next/static in dev —
      // it breaks Turbopack HMR by causing the browser to serve stale chunks.
      // This rule should only be added in a production reverse-proxy/CDN layer.
    ];
  },
};

export default nextConfig;
