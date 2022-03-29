const path = require('path');
const { merge } = require('webpack-merge');
const getRootPath = (_path) => path.resolve(process.cwd(), _path);

/* Storybook 구성 ------------------------------------------------------------- */
module.exports = {
  stories: ['../**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
  ],
  framework: '@storybook/react',
  features: {
    postcss: false,
    babelModeV7: true,
  },

  // Babel 구성 사용자 정의
  babel: async (options) => {
    // ⚠️ Storybook + Emotion 11 `css` prop 문제 해결
    // ⚠️ Storybook PostCSS 경고 문제 해결
    return {
      ...options,
      presets: [
        [
          require.resolve('@babel/preset-react'),
          {
            runtime: 'automatic',
            importSource: '@emotion/react',
          },
        ],
        require.resolve('@babel/preset-env'),
        require.resolve('@emotion/babel-preset-css-prop'),
      ],
      plugins: [
        ...options.plugins,
        [
          '@babel/plugin-proposal-class-properties',
          {
            loose: true,
          },
        ],
        [
          '@babel/plugin-proposal-private-methods',
          {
            loose: true,
          },
        ],
        [
          '@babel/plugin-proposal-private-property-in-object',
          {
            loose: true,
          },
        ],
      ],
    };
  },

  // Webpack 구성 사용자 정의
  webpackFinal: async (
    config,
    { configType /* 'DEVELOPMENT' 또는 'PRODUCTION' */ }
  ) => {
    // ⚠️ Storybook 애드온(Emotion 10 사용)과 Emotion 11 호환 문제 해결
    return merge(config, {
      resolve: {
        alias: {
          '@': getRootPath('src'),
          '@emotion/core': getRootPath('node_modules/@emotion/react'),
          '@emotion/styled': getRootPath('node_modules/@emotion/styled'),
          'emotion-theming': getRootPath('node_modules/@emotion/react'),
        },
      },
    });
  },
};
