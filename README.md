# T3Q 웹사이트 리뉴얼 프로젝트

T3Q 기존 웹사이트 리뉴얼 프로젝트는 React 프레임워크를 사용해 개발합니다.  
프로젝트는 아래 명령을 사용해 로컬 컴퓨터에 복제한 후, 프로젝트를 분석 또는 실습하세요.

```sh
npx degit yamoo9/t3q-project-guides <디렉토리_이름>
```

#### 디자인 해설

디자인 도구 Figma 사용법 및 디자인 해설은 선범님께 요청하세요.

- 디자인 토큰
- 컴포넌트 설계
- 디자인 → 코드 핸드오프



## 요구 사항

프로젝트에서 요구되는 사항은 다음과 같습니다.

- 디자인 시스템(아토믹 디자인) → 아토믹 개발 (Storybook 활용)
- 반응형 웹 디자인
- 라이트, 다크 테마 지원 (대표님 요구사항 반영)
- 다이어그램 고대비 모드 지원 (접근성 향상)
- 다국어(한/영) 모드 지원
- 관리 기능 (데이터 CRUD)
- IE 11 호환



## 사용된 기술 스택

프로젝트에 적용될 기술은 아래 나열된 목록을 참고하고, 현재 반영된 기술은 체크되었습니다.

- [x] **[Next.js](https://nextjs.org/)** ([React](https://nextjs.org/)) 프레임워크
- [x] **[TypeScript](https://www.typescriptlang.org/)** 프로그래밍 언어
- [x] **[Emotion](https://emotion.sh/docs/introduction)** CSS in JS 라이브러리
- [x] **[Storybook](https://storybook.js.org/)** 컴포넌트 주도 개발 (테스트, 문서)
- [x] **[SWR](https://swr.vercel.app/ko)** 데이터 패치 훅
- [x] **[SWR Internal State](https://github.com/zydalabs/swr-internal-state)** 글로벌(or 로컬 스토리지) 상태 관리 훅
- [x] **[SVGR](https://react-svgr.com/)** SVG → React 컴포넌트 트랜스폼
- [x] **[use-dark-mode](https://github.com/donavon/use-dark-mode)** 다크 테마 설정 훅
- [ ] **[Swipper](https://swiperjs.com/react)** 모바일 터치 슬라이더 라이브러리 (선범님이 사용하는 도구, React에서도 사용 가능)
- [ ] **[Framer Motion](https://www.framer.com/motion/)** 모션 라이브러리

#### 주의사항

Next, Storybook은 별개의 애플리케이션이므로 어느 한 쪽에 도구를 추가했다면 다른 한 쪽에도 도구를 추가해야 합니다.  
이 과정에서 오류가 자주 발생하지만 문제 원인을 찾아 해결해야 합니다. 

현재 프로젝트를 구성하면서 경험한 문제의 도구는 아래와 같습니다. (`.storybook/main.js` 참고)

- [x] **Emotion `css` prop** ⌁ Babel 구성에 [@emotion/babel-preset-css-prop](https://www.npmjs.com/package/@emotion/babel-preset-css-prop) 프리셋을 추가하여 문제 해결
- [x] **SVGR** ⌁ Webpack v5 업그레이드, [file-loader](https://www.npmjs.com/package/file-loader) 대신 [url-loader](https://www.npmjs.com/package/url-loader)로 교체하여 문제 해결



## 프로젝트 디렉토리 구조

프로젝트 구조는 현재 다음과 같이 구성되었습니다.

```sh
.
├── public/ # 정적 에셋 관리
├── assets/ # 동적 에셋 관리
├── components/ # 컴포넌트 관리
├── pages/ # 페이지 컴포넌트 관리 (라우팅)
├── hooks/ # 커스텀 훅 관리
├── theme/ # 테마 관리
├── utils/ # 재사용을 위한 유틸리티 관리
├── types/ # typescript 선언 파일 관리
├── next-env.d.ts # typescript 지원을 위한 선언 파일 
└── next.config.js # next.js 구성 (옵션 및 플러그인 추가 등)
```

#### 테마 구성

테마 관련된 파일은 theme 디렉토리에 포함되어 있습니다.  
디자인 파일에 구성된 토큰(tokens)은 테마 객체 구조(like JSON)로 변경 구성되어야 합니다.  
(현재 컬러, 타이포그래피 토큰만 일부 포함 됨)  

`themeConfig.ts` 파일을 열어보면 구성 방법을 이해할 수 있을 겁니다.  

```sh
theme/
├── AppThemeContainer.tsx # 애플리케이션에 테마 상태 및 업데이트 함수를 공급하는 컴포넌트입니다.
├── GlobalStyle.tsx # 글로벌 CSS 스타일을 관리하는 컴포넌트로 AppThemeContainer 컴포넌트 내부에 포함되어야 합니다.
├── themeConfig.ts # 디자인 토큰(design tokens) 값을 테마 객체 구조로 변경해 애플리케이션에서 사용합니다.
└── index.ts # 모듈을 다시 내보내는(re-export) 파일입니다.
```



## 프로젝트 개발

### Storybook App

Storybook 애플리케이션을 구동합니다. (localhost:6006)

```sh
npm run storybook
```

<img src="https://iili.io/MfwmcN.png" width="700" alt="구동된 Storybook 애플리케이션" />

Storybook 애플리케이션 ⌁ 디자인 패널 (Figma 파일 연결 됨 → 참고: `components/Header/Header.stories.tsx`)

<img src="https://iili.io/Mfv7hF.png" width="700" alt="" />

### Next.js App

Next 애플리케이션을 구동합니다. (localhost:3000)

```sh
npm run dev
```

<img src="https://iili.io/MfNdts.png" width="700" alt="OS 다크 테마로 구동된 Next.js 애플리케이션" />



## 선택이 필요한 기술 스택

Back-end 개발자 없이 하는 프로젝트이므로 데이터를 CRUD 할 수 있는 BaaS 서비스를 이용할 필요가 있습니다.  
팀원과 논의 후 어떤 서비스를 사용할지 정합니다. 아래 나열된 서비스 외 다른 서비스를 찾아 선택해도 무방합니다.  
(필요한 기능: 인증, 데이터베이스, 스토리지 등)

- [ ] [Firebase](https://firebase.google.com/)
- [ ] [AWS](https://aws.amazon.com/ko/)