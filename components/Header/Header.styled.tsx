import styled from '@emotion/styled';
import { Wrapper } from '@/theme';

export const HeaderWrapper = styled(Wrapper)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

// 홈 링크 내부의 svg 하단에 공백이 생기는 문제 해결을 위해
// svg 표시 모드를 block으로 설정
export const HomeLink = styled.a`
  svg {
    display: block;
  }
`;
