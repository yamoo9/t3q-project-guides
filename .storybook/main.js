const path = require('path');
const { merge } = require('webpack-merge');
const getRootPath = (_path) => path.resolve(process.cwd(), _path);

/* -------------------------------------------------------------------------- */
/* Storybook 구성                                                              */
/* -------------------------------------------------------------------------- */

module.exports = {
  stories: ['../**/*.stories.@(js|jsx|ts|tsx|mdx)'],

  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-addon-next-router',
    'storybook-addon-designs',
    '@storybook/addon-a11y',
  ],

  // Webpack 5 버전으로 업그레이드
  // 참고: https://gist.github.com/shilman/8856ea1786dcd247139b47b270912324#upgrading-from-webpack-4
  core: {
    builder: 'webpack5',
  },

  framework: '@storybook/react',

  // 스토리북 정적 에셋 설정
  // 참고: https://storybook.js.org/docs/react/configure/images-and-assets
  staticDirs: ['../public', '../assets'],

  // 스토리북 TypeScript 설정
  // 참고: https://storybook.js.org/docs/react/configure/typescript
  typescript: {
    check: true,
    checkOptions: {
      typescript: {
        isolatedModules: true,
      },
    },
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) =>
        prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
    },
  },

  features: {
    postcss: false,
    babelModeV7: true,
  },

  // Babel 구성 사용자 정의
  babel: async (options) => {
    // ⚠️ Storybook + Emotion 11 `css` prop 문제 해결
    // ⚠️ Storybook PostCSS 경고 문제 해결 (위 features 설정 참고)
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
    // 스토리북에 SVGR 사용을 위한 설정
    // 참고: https://github.com/storybookjs/storybook/issues/6188#issuecomment-940081810
    const fileLoaderRule = config.module.rules.find(
      (rule) => !Array.isArray(rule.test) && rule.test.test('.svg')
    );

    fileLoaderRule.exclude = /\.svg$/;

    config.module.rules.unshift({
      test: /\.svg$/,
      use: ['@svgr/webpack', 'url-loader'],
    });

    // ⚠️ Storybook 애드온(Emotion 10 사용)과 Emotion 11 호환 문제 해결
    return merge(config, {
      resolve: {
        alias: {
          '@': getRootPath('./'),
          '@emotion/core': getRootPath('node_modules/@emotion/react'),
          '@emotion/styled': getRootPath('node_modules/@emotion/styled'),
          'emotion-theming': getRootPath('node_modules/@emotion/react'),
        },
      },
    });
  },
};
