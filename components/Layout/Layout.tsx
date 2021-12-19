import React from 'react';
import styled from 'styled-components';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { MainLayout } from './MainLayout';
import { MobileLayout } from './MobileLayout';

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

export const AdContainer = styled.div`
  flex: 1 2 auto;
  background-color: ${(props) => props.color};
`;

export const ContentContainer = styled.div<{ maxWidth?: string }>`
  flex: 2 1 auto;
  ${(props) => props.maxWidth && `max-width: ${props.maxWidth};`}
`;

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
