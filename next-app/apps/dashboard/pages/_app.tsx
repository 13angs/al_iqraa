import * as React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import './index.module.css';
// import { Wrapper } from '../contexts/providers/ConsoleProvider';
import { DefaultContextWrapper } from '@next-app/default-context';

function CustomApp({ Component, pageProps }: AppProps) {
  
  return (
    <DefaultContextWrapper>
      <Head>
        <title>Console</title>
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
    </DefaultContextWrapper>
  );
}

export default CustomApp;
