import React from 'react';
import type { AppProps } from 'next/app';
import Script from 'next/script';
import { AppThemeContainer } from '@/theme';
import { Layout } from '@/components';

/* COMPONENT ---------------------------------------------------------------- */

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* 
        Favicon 변경 스크립트 
        Next.js에서 동기 코드를 사용할 경우 Script를 사용해야 함
        참고: https://nextjs.org/docs/messages/no-sync-scripts
      */}
      <Script src="/static/scripts/detectedChangeFavicon.js"></Script>
      <AppThemeContainer>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AppThemeContainer>
    </>
  );
}

export default App;
