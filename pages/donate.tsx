import CheckoutForm from 'components/CheckoutForm/CheckoutForm';
import { GetStaticProps } from 'next';
import React from 'react';
import { withTranslateProps } from 'services/StaticPropsHelpers';

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: await withTranslateProps(context),
  };
};

const Donate: React.FunctionComponent = () => {
  return (
    <>
      <CheckoutForm />
    </>
  );
};

export default Donate;
