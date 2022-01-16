import React from 'react';
import styled from 'styled-components';
import { BsInstagram } from 'react-icons/bs';
import Link from 'next/link';
import { Theme } from 'styles/Theme';
import { MainMenu } from './MainMenu/MainMenu';
import { BurgerMenu } from './BurgerMenu/BurgerMenu';
import dynamic from 'next/dynamic';
import useViewport from 'hooks/useViewport';

const HeaderContainer = styled.div<{ isMobile: boolean }>`
  overflow: hidden;
  position: sticky;
  background-color: ${Theme.palette.background.default};
  top: 0;
  width: 100%;
  display: flex;
  padding: 1em;
  text-align: center;
  justify-content: ${(props) => (props.isMobile ? 'space-between' : 'center')};
  gap: 1.5em;
`;

const HeaderSettingsSection = styled.div`
  display: flex;
  gap: 1em;
`;

export const Header: React.FunctionComponent = () => {
  const { isMobile } = useViewport();
  // dynamic load expensive items to increase initial load performance
  const LanguageButton = dynamic(() => import('./LanguageButton'));
  const ProfileButton = dynamic(() => import('./ProfileButton/ProfileButton'));

  const menu = isMobile ? <BurgerMenu /> : <MainMenu />;

  return (
    <HeaderContainer isMobile={isMobile}>
      {menu}
      <HeaderSettingsSection>
        <LanguageButton />
        <Link href="https://www.instagram.com" passHref={true}>
          <a>
            <BsInstagram color="purple" />
          </a>
        </Link>
        <ProfileButton />
      </HeaderSettingsSection>
    </HeaderContainer>
  );
};
