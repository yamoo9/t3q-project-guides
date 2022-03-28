import { css } from '@emotion/react';
import { Container } from './Logo.styled';

export function Logo() {
  return (
    <Container>
      <h1
        css={css`
          background: #333;
          color: #fff;
        `}
      >
        Logo
      </h1>
    </Container>
  );
}
