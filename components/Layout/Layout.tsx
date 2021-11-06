import React from 'react';
import styled from 'styled-components';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';

const MainContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const BodyContainer = styled.div`
  flex: 1 1 auto;
`;

const Layout: React.FunctionComponent = ({ children }) => {
  return (
    <MainContainer>
      <Header />
      <BodyContainer>{children}</BodyContainer>
      <Footer />
    </MainContainer>
  );
};

export default React.memo<React.FunctionComponent>(Layout);
