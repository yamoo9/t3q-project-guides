import React from 'react';
import { Header, Footer } from '@/components';

/* -------------------------------------------------------------------------- */
/* DEFAULT PROPS                                                              */
/* -------------------------------------------------------------------------- */

const defaultProps = {};

/* -------------------------------------------------------------------------- */
/* PROPS TYPE                                                                 */
/* -------------------------------------------------------------------------- */

interface LayoutProps {
  children: JSX.Element;
}

/* -------------------------------------------------------------------------- */
/* COMPONENT                                                                  */
/* -------------------------------------------------------------------------- */

/**
 * **레이아웃(layout)** 컴포넌트
 */
export function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

Layout.defaultProps = defaultProps;