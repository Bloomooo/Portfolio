import { withContentlayer } from "next-contentlayer";

console.log("Environment Variable:", process.env.UPSTASH_REDIS_REST_URL);
/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  experimental: {
    mdxRs: true,
  },
};

export default withContentlayer(nextConfig);
