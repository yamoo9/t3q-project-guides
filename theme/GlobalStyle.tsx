import styled from '@emotion/styled';
import { Global, css, useTheme } from '@emotion/react';
import { useDarkTheme } from '@/hooks';

/* -------------------------------------------------------------------------- */
/* GLOBAL STYLE COMPONENT                                                     */
/* -------------------------------------------------------------------------- */

export const GlobalStyle = (): JSX.Element => {
  const { isDarkTheme } = useDarkTheme();
  const { typography, forground, background, colors } = useTheme();

  return (
    <Global
      styles={css`
        html {
          overflow-y: scroll;
        }

        body {
          margin: 0;
          font-family: ${typography.fontFamily};
          line-height: ${typography.lineHeight};
          background: ${background};
          color: ${forground};
        }

        body,
        body *,
        body *::before,
        body *::afoter {
          box-sizing: border-box;
          transition: all 0.2s ease;
        }

        a {
          color: ${colors[isDarkTheme ? 'accent' : 'primary']['500']};
          text-decoration: none;
        }

        button {
          cursor: pointer;
        }

        abbr[title] {
          cursor: help;
          text-decoration: none;
        }
      `}
    />
  );
};

/* -------------------------------------------------------------------------- */
/* COMMON STYLE COMPONENTS                                                    */
/* -------------------------------------------------------------------------- */

export const Container = styled.header`
  background: ${({ theme: { background } }) => background};
`;

export const Wrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: flex-start;
  align-items: flex-start;
  max-width: 1144px;
  margin-left: auto;
  margin-right: auto;
  padding: 40px 0;
`;
