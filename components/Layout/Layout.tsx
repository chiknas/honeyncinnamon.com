import React from 'react';
import styled from 'styled-components';
import { Theme } from 'styles/Theme';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import dynamic from 'next/dynamic';

export const MobileMaxWidth = '600px';
export const MainMaxWidth = '960px';

const MainContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BodyContainer = styled.div`
  flex: 1 1 auto;
  display: flex;
  background-color: ${Theme.palette.background.default};
  flex-direction: row;
  // keep a constant width to the body of the page unless the view port is getting smaller than this width
  // in this case keep the body as wide as the view port
  max-width: ${MainMaxWidth};
  @media (min-width: ${MainMaxWidth}) {
    min-width: ${MainMaxWidth};
  }
  @media (max-width: ${MainMaxWidth}) {
    min-width: 100vw;
  }
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
  // Dynamically load the consent bar to increase performance since we do not need it right away.
  const CookieConsentBar = dynamic(
    () => import('components/CookieConsentBar/CookieConsentBar')
  );

  return (
    <>
      <MainContainer>
        <SkipNavigation href="#main-content">Skip navigation</SkipNavigation>
        <Header />
        <BodyContainer id="main-content">{children}</BodyContainer>
        <Footer />
      </MainContainer>
      <CookieConsentBar />
    </>
  );
};

export default React.memo<React.FunctionComponent>(Layout);
