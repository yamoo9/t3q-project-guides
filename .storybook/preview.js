import React from 'react';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import { ThemeProvider } from '@emotion/react';
import { withDesign } from 'storybook-addon-designs';
import ko from 'axe-core/locales/ko.json';
import { lightTheme, darkTheme, AppThemeContainer } from '../theme';

// 글로벌 데코레이터 (테마, 상태 등 전역적으로 공급해야 할 경우 사용)
// 참고: https://storybook.js.org/docs/react/writing-stories/decorators#global-decorators
export const decorators = [
  withDesign,
  (Story) => (
    <AppThemeContainer>
      <Story />
    </AppThemeContainer>
  ),
];

export const parameters = {
  a11y: {
    config: { locale: ko },
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
  backgrounds: {
    default: 'light',
    values: [
      { name: 'light', value: lightTheme.background },
      { name: 'dark', value: darkTheme.background },
    ],
  },
  controls: {
    // 속성 별 문서 기술 내용을 Controls 패널에서 바로 표시되도록 설정
    // 참고: https://storybook.js.org/docs/react/essentials/controls#show-full-documentation-for-each-property
    expanded: true,
    // 컨트롤이 없는 컴포넌트에서 경고 메시지 출력되지 않도록 설정
    // 참고: https://storybook.js.org/docs/react/essentials/controls#hide-nocontrols-warning
    hideNoControlsWarning: true,
    matchers: {
      color: /(background|color|fill)$/i,
      date: /Date$/,
    },
  },
  docs: {
    source: {
      type: 'dynamic',
      // 문서에서 데코레이터 코드 제외 설정
      // 참고: https://github.com/storybookjs/storybook/issues/12022#issuecomment-859540813
      excludeDecorators: true,
    },
  },
  nextRouter: {
    Provider: RouterContext.Provider,
  },
};
