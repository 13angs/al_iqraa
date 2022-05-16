import * as React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import './index.module.css';
import { Wrapper } from '../contexts/providers/ConsoleProvider';
import consoleContext from '../contexts/consoleContext';

function CustomApp({ Component, pageProps }: AppProps) {
  const { theme } = React.useContext(consoleContext);
  
  return (
    <Wrapper>
      <Head>
        <title>Console</title>
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
    </Wrapper>
  );
}

export default CustomApp;
