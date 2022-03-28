/* [참고] --------------------------------------------------------------------- */
// https://emotion.sh/docs/typescript

import styled from '@emotion/styled';

type ContainerProp = {
  temp?: string;
};

export const Container = styled.div<ContainerProp>``;
