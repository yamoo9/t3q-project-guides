import styled from '@emotion/styled';

/* [참고] --------------------------------------------------------------------- */
// https://emotion.sh/docs/typescript

// TypeScript를 사용해 Emotion 스타일 컴포넌트에 DOM 속성이 아닌,
// 비 표준 속성을 사용해야 할 경우 아래와 같이 props를 제네릭으로 설정합니다.
interface SwitchProps {
  $on?: boolean;
  $scale: number;
  $darkTheme?: boolean;
}

export const SwitchButton = styled.button<SwitchProps>`
  position: relative;
  width: 28px;
  height: 16px;
  border-radius: 14px;
  padding: 0;
  border: 1px solid
    ${({ $on, $darkTheme, theme: { colors } }) =>
      $on && $darkTheme ? colors.white['100%'] : colors.primary['500']};
  background: transparent;
  transform: scale(${({ $scale }) => $scale});
  transform-origin: left top;

  &::before {
    content: '';
    position: absolute;
    top: 1px;
    width: 12px;
    height: 12px;
    border-radius: 50px;
    transition: all 0.2s ease-in-out;
    ${({ $on, $darkTheme, theme: { colors } }) => {
      return `
        left: ${$on ? '50%' : '3%'};
        background: ${$on && $darkTheme ? colors.white['100%'] : colors.primary['500']}
      `;
    }}
  }
`;
