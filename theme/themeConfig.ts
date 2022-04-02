/* -------------------------------------------------------------------------- */
/* DESIGN TOKENS                                                              */
/* -------------------------------------------------------------------------- */

/* COLORS ------------------------------------------------------------------- */

const colors = {
  white: {
    '100%': 'rgba(255, 255, 255, 1)',
    '90%': 'rgba(255, 255, 255, 0.9)',
    '50%': 'rgba(255, 255, 255, 0.5)',
    '30%': 'rgba(255, 255, 255, 0.3)',
  },
  black: {
    '100%': 'rgba(0, 0, 0, 1)',
    '50%': 'rgba(0, 0, 0, 0.5)',
  },
  gray: {
    '50': '#f7f7f7',
    '100': '#e6e6e6',
    '100 / 10%': 'rgba(230, 230, 230, 0.1)',
    '200': '#cccccc',
    '300': '#b3b3b3',
    '400': '#999999',
    '500': '#808080',
    '600': '#666666',
    '700': '#4d4d4d',
    '800': '#333333',
    '900': '#1a1a1a',
  },
  primary: {
    '100': '#d5e4f6',
    '200': '#aac9ee',
    '300': '#80aee5',
    '400': '#5693dc',
    '500': '#2b78d3',
    '600': '#2360a9',
    '700': '#1a487f',
    '800': '#113055',
    '900': '#09182a',
  },
  accent: {
    '100': '#fff8d6',
    '200': '#fff1ad',
    '300': '#ffeb85',
    '400': '#ffe45c',
    '500': '#ffdd33',
    '600': '#ccb129',
    '700': '#99851f',
    '800': '#665814',
    '900': '#332c0a',
  },
  gradients: {
    '100': 'linear-gradient(170deg, #2b78d3 0%, #2b97d3 100%)',
    '200': 'linear-gradient(164deg, #fff282 0%, #fdc541 100%)',
    '300': 'linear-gradient(164deg, #2815a0 0%, #450d39 100%)',
    '400': 'linear-gradient(270deg, #f2dfa6e6 0%, #d9a6f200 100%)',
    '500': 'linear-gradient(-90deg, #4ac9ff 0%, #4ac9ff00 100%)',
    '600':
      'conic-gradient(from 134deg at 50% 50%, #0073E6 0deg, #0059B3 360deg)',
    '700':
      'conic-gradient(from 134deg at 50% 50%, #EAD301 0deg, #FFE81C 360deg)',
    '800':
      'conic-gradient(from 134deg at 50% 50%, #FC014C 0deg, #AA0303 360deg)',
    '900':
      'conic-gradient(from 134deg at 50% 50%, #00E6BC 0deg, #0094C3 360deg)',
  },
};

/* TYPOGRAPHY --------------------------------------------------------------- */

const typography = {
  fontFamily: `'Spoqa Han Sans Neo', 'Spoqa Han Sans', 'Open Sans',
  Roboto, sans-serif`,
  lineHeight: 1.5,
};

/* -------------------------------------------------------------------------- */
/* THEME                                                                      */
/* -------------------------------------------------------------------------- */

const { white, black, primary } = colors;

/* LIGHT THEME -------------------------------------------------------------- */

export const lightTheme = {
  colors,
  typography,
  forground: black['100%'],
  background: white['100%'],
  // 컴포넌트 단위 테마
  logos: {
    t3q: {
      fill: primary['500'],
    },
    // T3Q.ai, Doctor Answer 로고에 사용된 컬러는 시스템 색상이 아님
    t3qAi: {
      t3q: '#0077C0',
      ai: '#66ADD9',
      cloud: '#5DB864',
    },
    aiHunmin: {
      a: '#45B24E',
      i: '#FB9001',
      hunmin: '#1783D6',
    },
    drAnswer: '#586C79',
  },
};

/* DARK THEME --------------------------------------------------------------- */

export const darkTheme = {
  colors,
  typography,
  forground: white['100%'],
  background: primary['900'],
  // 컴포넌트 단위 테마
  logos: {
    t3q: {
      fill: white['100%'],
    },
    t3qAi: {
      ...lightTheme.logos.t3qAi,
    },
    aiHunmin: {
      ...lightTheme.logos.aiHunmin,
    },
    drAnswer: white['100%'],
  },
};
