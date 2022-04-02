import { css, useTheme } from '@emotion/react';
import { SwitchButton } from './Switcher.styled';

/* -------------------------------------------------------------------------- */
/* DEFAULT PROPS                                                              */
/* -------------------------------------------------------------------------- */

const defaultProps = {
  on: false,
  darkTheme: false,
  labels: {
    on: '끄기',
    off: '켜기',
  },
  scale: 1,
};

/* -------------------------------------------------------------------------- */
/* PROPS INTERFACE                                                            */
/* -------------------------------------------------------------------------- */

export interface SwitcherProps {
  /** 스위치를 켜거나 끌 수 있습니다. */
  on: boolean;
  /** 다크 테마용 스위치로 전환합니다. */
  darkTheme: boolean;
  /** 스위치 레이블을 변경할 수 있습니다. */
  labels: {
    on: string;
    off: string;
  };
  /** 컴포넌트 크기 스케일을 변경할 수 있습니다. */
  scale: number;
  /** 스위치를 클릭할 때 실행되는 이벤트 핸들러를 설정할 수 있습니다. */
  onClick?(): void;
}

/* -------------------------------------------------------------------------- */
/* COMPONENT                                                                  */
/* -------------------------------------------------------------------------- */

/**
 * **스위치(switch)** 컴포넌트
 */
export function Switcher({
  on,
  darkTheme,
  labels,
  scale,
  onClick,
  ...restProps
}: SwitcherProps): JSX.Element {
  let label = on ? labels?.on : labels?.off;

  return (
    <SwitchButton
      $on={on}
      $scale={scale}
      $darkTheme={darkTheme}
      type="button"
      aria-label={label}
      title={label}
      onClick={onClick}
      {...restProps}
    />
  );
}

Switcher.defaultProps = defaultProps;
