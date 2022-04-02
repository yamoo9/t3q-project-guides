/* [참고] --------------------------------------------------------------------- */
// 커스텀 도큐멘트 작성 방법 참고
// https://nextjs.org/docs/advanced-features/custom-document

// 여기에 사용된 Next 컴포넌트는 모든 페이지 공통
// <Html>, <Head />, <Main />, <NextScript />는 페이지 렌더링에 필수
import { Html, Head, Main, NextScript } from 'next/document';

/* [참고] --------------------------------------------------------------------- */
// FOUT(Flash Of Unstyled Text) 문제 해결 방법 적용
// http://bit.ly/_FOUT

const FONT_CDN = '//gif.helltabus.com/libs/spoqa-han-sans-neo';

export default function AppDocument() {
  return (
    <Html lang="ko-KR">
      <Head>
        {/* 웹 폰트 설정 (지우거나, 변경하지 마세요) */}
        <link
          as="font"
          rel="preload"
          type="font/woff2"
          href={`${FONT_CDN}/fonts/SpoqaHanSansNeo-Bold.woff2`}
          crossOrigin="anonymous"
        />
        <link
          as="font"
          rel="preload"
          type="font/woff2"
          href={`${FONT_CDN}/fonts/SpoqaHanSansNeo-Medium.woff2`}
          crossOrigin="anonymous"
        />
        <link
          as="font"
          rel="preload"
          type="font/woff2"
          href={`${FONT_CDN}/fonts/SpoqaHanSansNeo-Regular.woff2`}
          crossOrigin="anonymous"
        />
        <link
          as="font"
          rel="preload"
          type="font/woff2"
          href={`${FONT_CDN}/fonts/SpoqaHanSansNeo-Light.woff2`}
          crossOrigin="anonymous"
        />
        <link
          as="font"
          rel="preload"
          type="font/woff2"
          href={`${FONT_CDN}/fonts/SpoqaHanSansNeo-Thin.woff2`}
          crossOrigin="anonymous"
        />
        <link rel="stylesheet" href={`${FONT_CDN}/css/SpoqaHanSansNeo-kr.css`} />

        {/* Favicon, Home Icon 설정 (지우거나, 변경하지 마세요) */}
        <meta name="apple-mobile-web-app-title" content="T3Q" />
        <meta name="application-name" content="T3Q" />
        <meta name="msapplication-TileColor" content="#ffc100" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="icon" href="/static/favicon/favicon.ico" type="image/x-icon" sizes="any" />
        <link rel="apple-touch-icon" sizes="180x180" href="/static/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon/favicon-16x16.png" />
        <link rel="mask-icon" href="/static/favicon/safari-pinned-tab.svg" color="#0076d8" />
        <link rel="icon" id="favicon-theme" href="/static/favicon/favicon.svg" type="image/x-icon" /> 
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
