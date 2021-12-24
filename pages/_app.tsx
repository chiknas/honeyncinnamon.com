import '../styles/globals.css';
import type { AppProps } from 'next/app';
import React, { useEffect } from 'react';
import Layout from '../components/Layout/Layout';
import { ThemeProvider } from '@material-ui/core';
import { Theme } from '../styles/Theme';
import { appWithTranslation } from 'next-i18next';
import { StylesProvider } from '@material-ui/core/styles';
import { initializeApp } from 'firebase/app';

initializeApp({
  apiKey: 'AIzaSyBSt9OCWWT1rXhJYj4BRNGH3LRZ3Q7_MCo',
  authDomain: 'honeyncinnamon-ac5f3.firebaseapp.com',
  databaseURL:
    'https://honeyncinnamon-ac5f3-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'honeyncinnamon-ac5f3',
  storageBucket: 'honeyncinnamon-ac5f3.appspot.com',
  messagingSenderId: '1094067483458',
  appId: '1:1094067483458:web:14d6528d5a52ce0c250edb',
  measurementId: 'G-CHMNKJJ71W',
});

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
