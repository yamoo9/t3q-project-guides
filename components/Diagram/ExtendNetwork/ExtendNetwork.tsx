import React from 'react';
import { css } from '@emotion/react';
import { useDarkTheme } from '@/hooks';
import { ReactComponent as Mobile } from '@/assets/doctorAnswer/extendNetwork/mobile.svg';
import { ReactComponent as MobileDark } from '@/assets/doctorAnswer/extendNetwork/mobileDark.svg';
import { ReactComponent as MobileContrast } from '@/assets/doctorAnswer/extendNetwork/mobileContrast.svg';
import { ReactComponent as MobileDarkContrast } from '@/assets/doctorAnswer/extendNetwork/mobileDarkContrast.svg';
import { ReactComponent as Desktop } from '@/assets/doctorAnswer/extendNetwork/desktop.svg';
import { ReactComponent as DesktopDark } from '@/assets/doctorAnswer/extendNetwork/desktopDark.svg';
import { ReactComponent as DesktopContrast } from '@/assets/doctorAnswer/extendNetwork/desktopContrast.svg';
import { ReactComponent as DesktopDarkContrast } from '@/assets/doctorAnswer/extendNetwork/desktopDarkContrast.svg';

/* -------------------------------------------------------------------------- */
/* DEFAULT PROPS                                                              */
/* -------------------------------------------------------------------------- */

const defaultProps = {
  mode: 'mobile',
  dark: false,
  hiContrast: false,
};

/* -------------------------------------------------------------------------- */
/* PROPS TYPE                                                                 */
/* -------------------------------------------------------------------------- */

interface ExtendNetworkProps {
  /** 모바일 또는 데스크탑에서 표시되는 다이어그램을 변경합니다. */
  mode: 'mobile' | 'desktop';
  /** 다크 테마에서 표시되는 모드를 시뮬레이션합니다. */
  dark: boolean;
  /** 고대비 모드로 변경하여 콘텐츠의 명확성을 높입니다. */
  hiContrast: boolean;
}

/* -------------------------------------------------------------------------- */
/* COMPONENT                                                                  */
/* -------------------------------------------------------------------------- */

/**
 * **닥터앤서 → 네트워크 확장 다이어그램** 컴포넌트
 */
export function ExtendNetwork({
  mode,
  dark,
  hiContrast,
  ...restProps
}: ExtendNetworkProps): JSX.Element {
  let diagramType = mode;
  const {
    isDarkTheme,
    currentTheme: {
      colors: { black },
    },
  } = useDarkTheme();

  if (dark || isDarkTheme) {
    diagramType += 'Dark';
  }

  if (hiContrast) {
    diagramType += 'Contrast';
  }

  return (
    <figure
      css={css`
        background: ${dark ? black['100%'] : null};
      `}
      {...restProps}
    >
      <SvgDiagram type={diagramType} />
    </figure>
  );
}

ExtendNetwork.defaultProps = defaultProps;

/* -------------------------------------------------------------------------- */
/* SvgDiagram                                                                 */
/* -------------------------------------------------------------------------- */

interface SvgDiagramProps {
  type: string;
}

function SvgDiagram({ type }: SvgDiagramProps): JSX.Element {
  switch (type) {
    default:
    case 'mobile':
      return <Mobile />;
    case 'mobileDark':
      return <MobileDark />;
    case 'mobileContrast':
      return <MobileContrast />;
    case 'mobileDarkContrast':
      return <MobileDarkContrast />;
    case 'desktop':
      return <Desktop />;
    case 'desktopDark':
      return <DesktopDark />;
    case 'desktopContrast':
      return <DesktopContrast />;
    case 'desktopDarkContrast':
      return <DesktopDarkContrast />;
  }
}
