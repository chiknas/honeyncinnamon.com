import { GetStaticProps } from 'next';
import React from 'react';
import { withTranslateProps } from 'services/StaticPropsHelpers';
import styled from 'styled-components';

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: await withTranslateProps(context),
  };
};

const NotFoundContainer = styled.div`
  display: flex;
`;

const Custom404: React.FunctionComponent = () => {
  return <NotFoundContainer>Sorry this is not found.</NotFoundContainer>;
};

export default Custom404;
