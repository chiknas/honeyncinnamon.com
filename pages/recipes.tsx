import { GetStaticProps } from 'next';
import React from 'react';
import { withTranslateProps } from 'services/StaticPropsHelpers';

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: await withTranslateProps(context),
  };
};

const Recipes: React.FunctionComponent = () => {
  return <h1>To be continued...</h1>;
};

export default Recipes;
