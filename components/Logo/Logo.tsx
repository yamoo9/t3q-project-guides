import { css } from '@emotion/react';
import { Container } from './Logo.styled';

export interface LogoProps {
  background?: string;
  color?: string;
}

export function Logo({ background, color }: LogoProps) {
  return (
    <Container>
      <h1
        css={css`
          background: ${background};
          color: ${color};
        `}
      >
        Logo
      </h1>
    </Container>
  );
}

Logo.defaultProps = {
  background: '#fff',
  color: '#111',
};
