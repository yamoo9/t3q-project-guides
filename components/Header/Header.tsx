import React from 'react';
import Link from 'next/link';
import { Container } from '@/theme';
import { T3QLogo, Switcher } from '@/components';
import { useDarkTheme } from '@/hooks';
import { HeaderWrapper, HomeLink } from './Header.styled';

/* -------------------------------------------------------------------------- */
/* DEFAULT PROPS                                                              */
/* -------------------------------------------------------------------------- */

const defaultProps = {};

/* -------------------------------------------------------------------------- */
/* PROPS TYPE                                                                 */
/* -------------------------------------------------------------------------- */

interface HeaderProps {}

/* -------------------------------------------------------------------------- */
/* COMPONENT                                                                  */
/* -------------------------------------------------------------------------- */

/**
 * **헤더(header)** 컴포넌트
 */
export function Header(props: HeaderProps): JSX.Element {
  // useDarkTheme 훅이 반환하는 isDarkTheme은 현재 다크 테마 상태
  // toggleTheme은 테마 상태를 변경하는 업데이트 함수
  const { isDarkTheme, toggleTheme } = useDarkTheme();

  return (
    <Container>
      <HeaderWrapper>
        {/* 
          Next.js의 Link 컴포넌트 사용 시, 스타일 컴포넌트(a) 요소에 href 값을 전달해야 하므로 `passHref` prop 설정 
          참고: https://nextjs.org/docs/api-reference/next/link#if-the-child-is-a-custom-component-that-wraps-an-a-tag
        */}
        <Link href="/" passHref>
          <HomeLink aria-label="T3Q 인공지능 · 빅데이터 전문 기업">
            <T3QLogo width={84} />
          </HomeLink>
        </Link>
        {/* Navigation 컴포넌트 위치 */}
        <Switcher darkTheme on={isDarkTheme} onClick={toggleTheme} />
      </HeaderWrapper>
    </Container>
  );
}

Header.defaultProps = defaultProps;
