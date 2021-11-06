import '../styles/globals.css';
import type { AppProps } from 'next/app';
import React from 'react';
import Layout from '../components/Layout/Layout';
import { ThemeProvider } from '@material-ui/core';
import { Theme } from '../styles/Theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={Theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
