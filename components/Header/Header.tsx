import { useTheme } from '@material-ui/core';
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
    <HeaderContainer color={palette.background.paper}>
      <LogoContainer>
        <Logo />
      </LogoContainer>

      <HeaderMenu>
        <HeaderButton route={routes.diy}>DIY</HeaderButton>
        <HeaderButton route={routes.recipes}>Recipes</HeaderButton>
      </HeaderMenu>
    </HeaderContainer>
  );
};
