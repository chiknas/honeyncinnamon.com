import React from 'react';
import styled from 'styled-components';
import { routes } from '../../services/routes';
import { HeaderButton } from './HeaderButton';
import { BsInstagram } from 'react-icons/bs';
import { useTranslation } from 'next-i18next';
import { LanguageButton } from './LanguageButton';
import Link from 'next/link';
import { Theme } from 'styles/Theme';
import { ProfileButton } from './ProfileButton/ProfileButton';

const HeaderContainer = styled.div`
  overflow: hidden;
  position: fixed;
  background-color: ${Theme.palette.background.default};
  top: 0;
  width: 100vw;
  display: flex;
  padding: 1em;
  text-align: center;
  justify-content: center;
  gap: 1.5em;
`;

const HeaderSettingsSection = styled.div`
  display: flex;
  gap: 1em;
`;

export const Header: React.FunctionComponent = () => {
  const { t } = useTranslation();

  return (
    <HeaderContainer>
      <HeaderButton route={routes.home}>{t('header.home')}</HeaderButton>
      <HeaderButton route={routes.home}>{t('header.about')}</HeaderButton>
      <HeaderButton route={routes.recipes}>{t('header.recipes')}</HeaderButton>
      <HeaderButton route={routes.home}>{t('header.shop')}</HeaderButton>
      <HeaderButton route={routes.home}>{t('header.subscribe')}</HeaderButton>
      <HeaderButton route={routes.home}>{t('header.contact')}</HeaderButton>
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
