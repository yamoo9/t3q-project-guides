/* webpack-merge + TypeScript ----------------------------------------- */
// [참고](https://github.com/survivejs/webpack-merge#using-with-typescript)

import { merge } from 'webpack-merge';
import { Configuration } from 'webpack';
import { getPackageDir } from '../utils/getPackageDir';

/* Storybook 구성 ------------------------------------------------------------- */

module.exports = {
  stories: ['../**/*.stories.mdx', '../**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
  ],
  framework: '@storybook/react',
  features: {
    emotionAlias: false,
  },
  webpackFinal: async (
    config: Configuration,
    configType: 'development' | 'production'
  ) => {
    return merge<Configuration>(config, {
      resolve: {
        alias: {
          '@emotion/core': getPackageDir('@emotion/react'),
          '@emotion/styled': getPackageDir('@emotion/styled'),
          'emotion-theming': getPackageDir('@emotion/react'),
        },
      },
    });
  },
};
