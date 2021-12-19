import React from 'react';
import styled from 'styled-components';
import { routes } from '../../services/routes';
import { HeaderButton } from './HeaderButton';
import { BsInstagram } from 'react-icons/bs';
import { useTranslation } from 'next-i18next';
import { LanguageButton } from './LanguageButton';

const HeaderContainer = styled.div`
  overflow: hidden;
  position: sticky;
  top: 0;
  display: flex;
  padding: 1em;
  text-align: center;
  justify-content: center;
  * + * {
    margin: 0 1em 0 1em;
  }
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
      <LanguageButton />
      <BsInstagram color="purple" />
    </HeaderContainer>
  );
};
