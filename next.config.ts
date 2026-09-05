import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /**
   * Ships a self-contained server with only the node_modules actually reached,
   * which turns a ~1GB image into roughly 150MB. It matters here because the
   * frontend shares one small EC2 box with two JVMs.
   */
  output: 'standalone',

  /**
   * Not a static export, on purpose. Phase 3 resolves storefronts from the
   * hostname in middleware ({slug}.kodasolutions.net), and middleware needs a
   * running server. Exporting statically now would mean migrating back the
   * moment the first storefront ships.
   */

  images: {
    // Merchant product photography, served from the media bucket.
    remotePatterns: [
      { protocol: 'https', hostname: '*.amazonaws.com' },
      { protocol: 'https', hostname: '*.cloudfront.net' },
    ],
  },
};

export default nextConfig;
