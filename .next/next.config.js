/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: false,
  output: 'standalone',

  // ✅ 图片优化与缓存
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
    domains: ['localhost', 'vercel.app']
  },

  // ✅ 国际化支持（中、英、日）
  i18n: {
    locales: ['zh', 'en', 'jp'],
    defaultLocale: 'zh'
  },

  // ✅ 环境变量设置
  env: {
    NEXT_PUBLIC_APP_NAME: '智慧教育学习伙伴',
    NEXT_PUBLIC_API_BASE_URL: process.env.API_URL || 'https://smart-education-api.vercel.app'
  },

  // ✅ 安全头
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' }
        ]
      }
    ];
  },

  // ✅ API 与页面重写
  async rewrites() {
    return [
      { source: '/api/:path*', destination: '/api/:path*' },
      { source: '/lessons/:path*', destination: '/lessons/:path*' }
    ];
  },

  // ✅ 静态跳转（示例）
  async redirects() {
    return [
      { source: '/old-path', destination: '/new-path', permanent: true }
    ];
  }
};

module.exports = nextConfig;
