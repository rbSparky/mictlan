/** @type {import('next').NextConfig} */
const nextConfig = {
  // 100 % static export
  output: 'export',
  // If you use <Image>, add this
  images: { unoptimized: true },
};

export default nextConfig;
