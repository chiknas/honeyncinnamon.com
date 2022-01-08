import React from 'react';
import styled from 'styled-components';
import { BsInstagram } from 'react-icons/bs';
import { LanguageButton } from './LanguageButton';
import Link from 'next/link';
import { Theme } from 'styles/Theme';
import { ProfileButton } from './ProfileButton/ProfileButton';
import useViewport from 'hooks/useViewport';
import { MainMenu } from './MainMenu/MainMenu';
import { BurgerMenu } from './BurgerMenu/BurgerMenu';

const HeaderContainer = styled.div<{ isMobile: boolean }>`
  overflow: hidden;
  position: sticky;
  background-color: ${Theme.palette.background.default};
  top: 0;
  width: 100vw;
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
