import '../styles/globals.css';
import type { AppProps } from 'next/app';
import React, { useEffect } from 'react';
import Layout from '../components/Layout/Layout';
import { ThemeProvider } from '@material-ui/core';
import { Theme } from '../styles/Theme';
import { appWithTranslation } from 'next-i18next';
import { StylesProvider } from '@material-ui/core/styles';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <ThemeProvider theme={Theme}>
      <StylesProvider injectFirst>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </StylesProvider>
    </ThemeProvider>
  );
}

export default appWithTranslation(MyApp);
