import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { Container } from './styled';

/* T3Q AI 플랫폼 페이지 컴포넌트 ------------------------------------------------------ */

const T3QAi: NextPage = () => {
  return (
    <>
      <Head>
        <title>T3Q AI 플랫폼 | T3Q ⌁ 인공지능 · 빅데이터 전문 기업</title>

        {/* 
          SEO (검색 엔진 최적화) 
          [참고](https://developers.google.com/search/docs/beginner/seo-starter-guide?hl=ko)
          [Next.js Robots.txt 설정](https://bit.ly/3JQBN9Z)
          [Next.js SEO - robots.txt, sitemap.xml 자동 생성](https://bit.ly/3tKIVPB)
        */}
        <meta name="description" content="페이지 설명 작성" />
        <meta name="keywords" content="페이지, 핵심, 키워드, 추가" />

        {/* 
          오픈 그래프 프로토콜(Open Graph Protocol: https://ogp.me/) 
          [참고](https://developers.facebook.com/docs/sharing/webmasters?locale=ko_KR)
        */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://t3q.com/" />
        <meta property="og:title" content="타이틀 작성" />
        <meta property="twitter:title" content="트위터 타이틀 작성" />
        <meta property="og:description" content="설명 작성" />
        <meta property="og:image" content="이미지 URL 추가" />
        <meta property="og:article:author" content="저작장 정보 작성" />
      </Head>

      <main>
        <h1>T3Q AI 플랫폼</h1>
        <Container>테스트 컨테이너</Container>
      </main>
    </>
  );
};

export default T3QAi;
