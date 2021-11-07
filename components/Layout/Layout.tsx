import { useTheme } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import { AdSense } from '../AdSense/AdSense';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';

const MainContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const BodyContainer = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: row;
`;

const AdContainer = styled.div`
  flex: 1 2 auto;
  background-color: ${(props) => props.color};
`;

const ContentContainer = styled.div`
  flex: 2 1 auto;
`;

const Layout: React.FunctionComponent = ({ children }) => {
  const { palette } = useTheme();
  return (
    <MainContainer>
      <Header />
      <BodyContainer>
        <AdContainer color={palette.background.paper}>
          <AdSense />
        </AdContainer>
        <ContentContainer>{children}</ContentContainer>
        <AdContainer color={palette.background.paper}>
          <AdSense />
        </AdContainer>
      </BodyContainer>
      <Footer />
    </MainContainer>
  );
};

export default React.memo<React.FunctionComponent>(Layout);
