import React from 'react';
import { Container, Wrapper } from '@/theme';
import { css, useTheme } from '@emotion/react';

/* -------------------------------------------------------------------------- */
/* DEFAULT PROPS                                                              */
/* -------------------------------------------------------------------------- */

const defaultProps = {};

/* -------------------------------------------------------------------------- */
/* PROPS TYPE                                                                 */
/* -------------------------------------------------------------------------- */

interface FooterProps {}

/* -------------------------------------------------------------------------- */
/* COMPONENT                                                                  */
/* -------------------------------------------------------------------------- */

/**
 * **푸터(footer)** 컴포넌트
 */
export function Footer(props: FooterProps): JSX.Element {
  const {
    colors: { white, primary },
  } = useTheme();

  return (
    <Container
      css={css`
        background: ${primary['900']};
        color: ${white['100%']};
      `}
    >
      <Wrapper>Footer 코드를 작성합니다.</Wrapper>
    </Container>
  );
}

Footer.defaultProps = defaultProps;
