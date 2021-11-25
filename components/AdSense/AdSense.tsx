/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useEffect } from 'react';

export const AdSense: React.FunctionComponent = () => {
  useEffect(() => {
    try {
      // @ts-ignore
      (adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      // data-ad-format="fluid"
      data-ad-layout="in-article"
      data-ad-client="ca-pub-9199532486898731"
      data-ad-slot="9876543210"
      data-adtest="on"
    ></ins>
  );
};
