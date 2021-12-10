import { useTheme } from '@material-ui/core';
import { DonateButton } from 'components/DonateButton/DonateButton';
import React from 'react';
import styled from 'styled-components';
import { routes } from '../../services/routes';
import { Logo } from '../Logo/Logo';
import { HeaderButton } from './HeaderButton';

const HeaderContainer = styled.div`
  overflow: hidden;
  position: sticky;
  top: 0;
  background-color: ${(props) => props.color};
  display: flex;
  align-items: stretch;
  margin: 1em;
`;

const LogoContainer = styled.div`
  flex: 0 1 auto;
  margin-left: 1.5em;
`;

const HeaderMenu = styled.div`
  flex: 1 1 auto;
  margin-left: 3em;
  height: 100%;
`;

export const Header: React.FunctionComponent = () => {
  const { palette } = useTheme();

  return (
    <HeaderContainer color={palette.background.default}>
      <LogoContainer>
        <Logo />
      </LogoContainer>

      <HeaderMenu>
        <HeaderButton route={routes.recipes}>Recipes</HeaderButton>
        <DonateButton />
      </HeaderMenu>
    </HeaderContainer>
  );
};
