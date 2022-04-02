const withPlugins = require('next-compose-plugins');
const withSvgr = require('@newhighsco/next-plugin-svgr');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['ko-KR', 'en'],
    defaultLocale: 'ko-KR',
  },
};

module.exports = withPlugins(
  [
    [
      withSvgr,
      {
        svgrOptions: {},
      },
    ],
  ],
  nextConfig
);
