import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { GlobalStyle } from '@/theme';
import { useDarkTheme } from '@/hooks';

/* -------------------------------------------------------------------------- */
/* DEFAULT PROPS                                                              */
/* -------------------------------------------------------------------------- */

const defaultProps = {
  dark: false,
};

/* -------------------------------------------------------------------------- */
/* PROPS                                                                      */
/* -------------------------------------------------------------------------- */

interface AppThemeContainerProps {
  dark?: boolean;
  children: JSX.Element;
}

/* -------------------------------------------------------------------------- */
/* COMPONENT                                                                  */
/* -------------------------------------------------------------------------- */

export function AppThemeContainer({ dark, children }: AppThemeContainerProps): JSX.Element {
  const { isMounted, currentTheme } = useDarkTheme(dark);

  return (
    <>
      <ThemeProvider theme={currentTheme}>
        <GlobalStyle />
        {isMounted && children}
      </ThemeProvider>
    </>
  );
}

AppThemeContainer.defaultProps = defaultProps;
