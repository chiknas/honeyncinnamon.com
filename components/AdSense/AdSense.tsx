/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useCookieConsent } from '@use-cookie-consent/core';
import Head from 'next/head';
import React, { useEffect } from 'react';

export const AdSense: React.FunctionComponent = () => {
  const { consent } = useCookieConsent();
  useEffect(() => {
    try {
      consent.thirdParty &&
        // @ts-ignore
        (adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.log(e);
    }
  }, [consent.thirdParty]);

  return (
    <>
      {consent.thirdParty && (
        <>
          <Head>
            <script
              async
              src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9199532486898731"
              crossOrigin="anonymous"
            ></script>
          </Head>
          <ins
            className="adsbygoogle"
            // data-ad-format="fluid"
            data-ad-layout="in-article"
            data-ad-client="ca-pub-9199532486898731"
            data-ad-slot="9876543210"
            data-adtest="on"
          ></ins>
        </>
      )}
    </>
  );
};
