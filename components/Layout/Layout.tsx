import React, { useMemo } from 'react';
import styled from 'styled-components';
import { Theme } from 'styles/Theme';
import useViewport from '../../hooks/useViewport';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { MainLayout } from './MainLayout';
import { MobileLayout } from './MobileLayout';
import dynamic from 'next/dynamic';

const MainContainer = styled.div`
  min-height: 100vh;
  width: 100%;
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
  height: 100%;
  background-color: ${Theme.palette.background.default};
  ${(props) => props.maxWidth && `max-width: ${props.maxWidth};`}
`;

const SkipNavigation = styled.a`
  text-decoration: underline;
  position: absolute;
  z-index: 1000;
  background: ${Theme.palette.primary.main};
  padding: 0.5rem 1.5rem;
  border-radius 0 0 0.25rem 0.25rem;
  left: 0.5rem;

  transform: translateY(-120%);
  transition: transform 325ms ease-in;
  &:focus {
    transform: translateY(0);
  }
`;

const Layout: React.FunctionComponent = ({ children }) => {
  const { isMobile } = useViewport();
  // Dynamically load the consent bar to increase performance since we do not need it right away.
  const CookieConsentBar = dynamic(
    () => import('components/CookieConsentBar/CookieConsentBar')
  );

  const Content = useMemo(
    () =>
      isMobile ? (
        <MobileLayout>{children}</MobileLayout>
      ) : (
        <MainLayout>{children}</MainLayout>
      ),
    [children, isMobile]
  );

  return (
    <MainContainer>
      <SkipNavigation href="#main-content">Skip navigation</SkipNavigation>
      <Header />
      <BodyContainer id="main-content" isMobile={isMobile}>
        {Content}
        <CookieConsentBar />
      </BodyContainer>
      <Footer />
    </MainContainer>
  );
};

export default React.memo<React.FunctionComponent>(Layout);
