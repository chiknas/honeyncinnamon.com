import { useTheme } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import { AdSense } from '../AdSense/AdSense';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';

const MainContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const BodyContainer = styled.div<{ isMobile?: boolean }>`
  flex: 1 1 auto;
  display: flex;
  flex-direction: ${(props) => (props.isMobile ? 'column' : 'row')};
`;

const AdContainer = styled.div`
  flex: 1 2 auto;
  background-color: ${(props) => props.color};
`;

const ContentContainer = styled.div`
  flex: 2 1 auto;
`;

const MainLayout: React.FunctionComponent = ({ children }) => {
  const { palette } = useTheme();
  return (
    <>
      <AdContainer color={palette.background.paper}>
        <AdSense />
      </AdContainer>
      <ContentContainer>{children}</ContentContainer>
      <AdContainer color={palette.background.paper}>
        <AdSense />
      </AdContainer>
    </>
  );
};

const MobileLayout: React.FunctionComponent = ({ children }) => {
  const { palette } = useTheme();
  return (
    <>
      <ContentContainer>{children}</ContentContainer>
      <AdContainer color={palette.background.paper}>
        <AdSense />
      </AdContainer>
    </>
  );
};

const Layout: React.FunctionComponent = ({ children }) => {
  const { width } = useWindowDimensions();
  const isMobile = width <= 768;
  const Content = isMobile ? (
    <MobileLayout>{children}</MobileLayout>
  ) : (
    <MainLayout>{children}</MainLayout>
  );
  return (
    <MainContainer>
      <Header />
      <BodyContainer isMobile={isMobile}>{Content}</BodyContainer>
      <Footer />
    </MainContainer>
  );
};

export default React.memo<React.FunctionComponent>(Layout);
