import { css, useTheme } from '@emotion/react';

/* -------------------------------------------------------------------------- */
/* DEFAULT PROPS                                                              */
/* -------------------------------------------------------------------------- */

const defaultProps = {
  half: false,
  width: 120,
  dark: false,
};

/* -------------------------------------------------------------------------- */
/* PROPS INTERFACE                                                            */
/* -------------------------------------------------------------------------- */

export interface T3QLogoProps {
  /** 로고 색상을 사용자가 임의로 변경할 수 있습니다. */
  fill?: string;
  /** 로고 크기(너비 기준)를 기본 값의 절반으로 설정할 수 있습니다. */
  half: boolean;
  /** 로고 크기(너비 기준)를 사용자가 임의로 변경할 수 있습니다. */
  width: number;
  /** 다크 테마에서 표시되는 모드를 시뮬레이션합니다. */
  dark: boolean;
}

/* -------------------------------------------------------------------------- */
/* COMPONENT                                                                  */
/* -------------------------------------------------------------------------- */

/**
 * **T3Q 로고** 컴포넌트
 */
export function T3QLogo({ fill, half, width, dark, ...restProps }: T3QLogoProps) {
  const {
    logos: { t3q },
    colors: { black },
  } = useTheme();
  const logoColor = fill ?? t3q.fill;

  if (half) width = (width as number) / 2;

  return (
    <svg
      width={width}
      viewBox="0 0 120 38"
      fill="none"
      css={css`
        background: ${dark ? black['100%'] : null};
        padding: ${dark ? '12px' : null};
      `}
      {...restProps}
    >
      <path d="M11.0769 0H0V7.38462H11.0769V0Z" fill={logoColor} />
      <path d="M44.3152 0H14.7768V29.5385H22.1614V7.38462H44.3152V0Z" fill={logoColor} />
      <path
        d="M49.07 0V7.38462H70.973V11.0769H64.0029V18.4615H70.973V22.1538H49.07V29.5385H78.6085V0H49.07Z"
        fill={logoColor}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M120 29.5385H112.651V0H83.3632V29.5385H112.615V36.9231H120V29.5385ZM90.7479 22.1538H105.266V7.38462H90.7479V22.1538Z"
        fill={logoColor}
      />
    </svg>
  );
}

T3QLogo.defaultProps = defaultProps;
