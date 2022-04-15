import React from 'react';
import styled from 'styled-components';
import { Theme } from 'styles/Theme';
import { MainMenu } from './MainMenu/MainMenu';
import { BurgerMenu } from './BurgerMenu/BurgerMenu';
import dynamic from 'next/dynamic';
import useViewport from 'hooks/useViewport';

const HeaderContainer = styled.div<{ isMobile: boolean }>`
  overflow: hidden;
  position: sticky;
  z-index: 999;
  background-color: ${Theme.palette.background.default};
  top: 0;
  width: 100%;
  display: flex;
  padding: 1em;
  text-align: center;
  align-items: center;
  justify-content: ${(props) => (props.isMobile ? 'space-between' : 'center')};
  gap: 1.5em;
`;

const HeaderSettingsSection = styled.div<{ isMobile: boolean }>`
  display: flex;
  gap: 1em;
  position: absolute;
  right: ${(props) => (props.isMobile ? '1.5em' : '3em')};
`;

const Header: React.FunctionComponent = () => {
  const { isMobile, loading } = useViewport();
  // dynamic load expensive items to increase initial load performance
  const LanguageButton = dynamic(() => import('./LanguageButton'));
  const ProfileButton = dynamic(() => import('./ProfileButton/ProfileButton'));

  const menu = React.useMemo(() => {
    if (!loading) {
      return isMobile ? <BurgerMenu /> : <MainMenu />;
    }
  }, [isMobile, loading]);

  return (
    <HeaderContainer isMobile={isMobile}>
      {menu}
      <HeaderSettingsSection isMobile={isMobile}>
        <LanguageButton />
        <ProfileButton />
      </HeaderSettingsSection>
    </HeaderContainer>
  );
};

export default React.memo<React.FunctionComponent>(Header);
