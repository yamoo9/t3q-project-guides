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
        <link
          rel="stylesheet"
          href={`${FONT_CDN}/css/SpoqaHanSansNeo-kr.css`}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
