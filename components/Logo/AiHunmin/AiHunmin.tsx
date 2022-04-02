import { css, useTheme } from '@emotion/react';

/* -------------------------------------------------------------------------- */
/* DEFAULT PROPS                                                              */
/* -------------------------------------------------------------------------- */

const defaultProps = {
  width: 188,
  dark: false,
};

/* -------------------------------------------------------------------------- */
/* PROPS TYPE                                                                 */
/* -------------------------------------------------------------------------- */

interface AiHunminLogoProps {
  /** 로고 색상을 사용자가 임의로 변경할 수 있습니다. */
  fill?: string;
  /** 다크 테마에서 표시되는 모드를 시뮬레이션합니다. */
  dark: boolean;
  /** 로고 크기(너비 기준)를 사용자가 임의로 변경할 수 있습니다. */
  width: number;
}

/* -------------------------------------------------------------------------- */
/* COMPONENT                                                                  */
/* -------------------------------------------------------------------------- */

/**
 * **AI 훈민정음 로고** 컴포넌트
 */
export function AiHunminLogo({ fill, width, dark }: AiHunminLogoProps): JSX.Element {
  const {
    logos: { aiHunmin },
    colors: { black },
  } = useTheme();

  const logoColors = {
    a: fill ?? aiHunmin.a,
    i: fill ?? aiHunmin.i,
    hunmin: fill ?? aiHunmin.hunmin,
  };

  return (
    <svg
      width={width}
      viewBox="0 0 188 34"
      fill="none"
      css={css`
        background: ${dark ? black['100%'] : null};
        padding: ${dark ? '12px' : null};
      `}
    >
      <g>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M180.431 7.01744C180.431 10.8721 177.355 14.0349 173.497 14.0349C169.639 14.0349 166.563 10.9215 166.563 7.01744C166.563 3.16279 169.688 0 173.497 0C177.306 0 180.431 3.16279 180.431 7.01744ZM175.646 6.96802C175.646 5.78198 174.669 4.7936 173.497 4.7936C172.325 4.7936 171.349 5.78198 171.349 6.96802C171.349 8.15407 172.325 9.14244 173.497 9.14244C174.669 9.14244 175.646 8.15407 175.646 6.96802Z"
          fill={logoColors.hunmin}
        />
        <path d="M187.951 16.0116H158.945V19.8169H187.951V16.0116Z" fill={logoColors.hunmin} />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M158.994 33.6541V22.0901H188V33.6541H158.994ZM162.705 29.5523H184.484V25.9942H162.705V29.5523Z"
          fill={logoColors.hunmin}
        />
        <path
          d="M150.302 9.24128V0.197678H154.453V21.7442H150.302V12.7006C149.765 13.4913 148.837 14.0349 147.812 14.0349C146.152 14.0349 144.784 12.6512 144.784 10.9709C144.784 9.2907 146.152 7.90698 147.812 7.90698C148.837 7.90698 149.765 8.40117 150.302 9.24128Z"
          fill={logoColors.hunmin}
        />
        <path
          d="M142.24 15.2372L142.239 15.2359C140.59 12.8972 138.941 10.5585 137.118 7.9564H143.417V4.34885H125.252V8.2035H131.942C130.811 10.1586 129.726 12.0217 128.658 13.8539C127.513 15.8191 126.389 17.7488 125.252 19.718C125.721 19.9948 126.174 20.2557 126.627 20.5166C127.307 20.9079 127.987 21.2995 128.719 21.7442C129.647 20.1861 130.565 18.6705 131.487 17.1482L131.488 17.1457L131.491 17.1414L131.494 17.137C132.558 15.3797 133.628 13.613 134.725 11.7616C136.523 14.2628 138.234 16.6187 139.969 19.0075L139.971 19.0098C140.498 19.7354 141.027 20.464 141.562 21.2006C142.734 20.2616 143.71 19.5204 144.736 18.7791C143.906 17.6001 143.097 16.4526 142.288 15.3059L142.24 15.2372Z"
          fill={logoColors.hunmin}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M137.167 28.2674C137.167 25.3023 139.559 22.8808 142.489 22.8808C145.419 22.8808 147.763 25.3023 147.812 28.2674C147.812 31.2326 145.419 33.6541 142.489 33.6541C139.559 33.6541 137.167 31.2326 137.167 28.2674ZM141.366 28.2674C141.366 28.9099 141.903 29.4041 142.489 29.4041C143.075 29.4041 143.564 28.9099 143.612 28.2674C143.612 27.625 143.075 27.1308 142.489 27.1308C141.855 27.1308 141.366 27.6744 141.366 28.2674Z"
          fill={logoColors.hunmin}
        />
        <path d="M116.853 0.197678H120.906V21.7442H116.853V0.197678Z" fill={logoColors.hunmin} />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M92.1933 4.34885H111.579V21.7442H92.1933V4.34885ZM95.6603 17.593H107.77V8.2035H95.6603V17.593Z"
          fill={logoColors.hunmin}
        />
        <path
          d="M96.1486 29.7006H120.906C120.872 30.7687 120.885 31.7888 120.897 32.6436L120.897 32.6452C120.902 33.0158 120.906 33.3552 120.906 33.6541H92.1444V26.1424H96.1486V29.7006Z"
          fill={logoColors.hunmin}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M68.3636 11.5639C68.3636 14.5291 70.7564 16.9506 73.6862 16.9506C76.6161 16.9506 79.0088 14.5291 79.0088 11.5639C79.0088 10.2791 78.5694 9.09302 77.8369 8.20348H87.7496V4.10174H75.786V0.247086H71.5377V4.10174H58.7927C58.7927 4.7872 58.7808 5.4484 58.7687 6.11539L58.7686 6.11661C58.7563 6.79543 58.7439 7.48097 58.7439 8.20348H69.5844C68.8031 9.14243 68.3636 10.2791 68.3636 11.5639ZM73.6862 10.4767C74.2722 10.4767 74.8093 10.9709 74.8093 11.6134C74.8093 12.2064 74.321 12.75 73.6862 12.75C73.1003 12.75 72.5631 12.2558 72.5631 11.6134C72.5631 10.9709 73.0514 10.4767 73.6862 10.4767Z"
          fill={logoColors.hunmin}
        />
        <path
          d="M87.7008 29.6511H62.4551V26.1424H58.6462V33.6541H87.7008V29.6511Z"
          fill={logoColors.hunmin}
        />
        <path
          d="M87.7008 18.0872H58.7927V21.7442H71.6842C71.0494 22.2878 70.6099 23.1279 70.6099 24.0669C70.6099 25.7965 71.9771 27.1802 73.6862 27.1802C75.3953 27.1802 76.7626 25.7965 76.7626 24.0669C76.7626 23.1279 76.3719 22.2878 75.6883 21.7442H87.7008V18.0872Z"
          fill={logoColors.hunmin}
        />
        <path
          d="M47.5522 7.2426C50.1435 8.32889 51.374 11.3354 50.3006 13.9579C49.2272 16.5804 46.2564 17.8257 43.6651 16.7394C41.0738 15.6531 39.8433 12.6466 40.9167 10.0241C41.99 7.40164 44.9608 6.15631 47.5522 7.2426Z"
          fill={logoColors.i}
        />
        <path d="M41.1158 18.2849H50.2961V34H41.1158V18.2849Z" fill={logoColors.i} />
        <path
          d="M25.4899 33.9012H35.8909L23.5855 0.543605H12.3543L0 33.9012H10.1569L11.9148 28.3663H23.7808L25.4899 33.9012ZM14.161 21.25L17.921 9.2907L21.5834 21.25H14.161Z"
          fill={logoColors.a}
        />
      </g>
    </svg>
  );
}

AiHunminLogo.defaultProps = defaultProps;