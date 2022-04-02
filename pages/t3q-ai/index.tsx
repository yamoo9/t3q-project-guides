import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { Container, Wrapper } from '@/theme';

/* T3Q AI 플랫폼 페이지 컴포넌트 ------------------------------------------------------ */

/*
  [안내]
    문서 제목 및 설명 오픈 그라프 프로토콜 내용은 데레사님께서 정리해주실 것입니다.
    페이지 별 관련 내용을 받으면 업데이트 해주세요.
*/

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
        {/* Google은 웹 순위에 더 이상 keywards 메타 태그를 사용하지 않음 (https://bit.ly/3wJdpnd) */}
        {/* <meta name="keywords" content="페이지, 핵심, 키워드, 추가" /> */}

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

      <Container as="main">
        <Wrapper>
          {/* link 테스트 */}
          <nav>
            <Link href="/">T3Q 홈 페이지 이동</Link>
          </nav>
        </Wrapper>
      </Container>
    </>
  );
};

export default T3QAi;
