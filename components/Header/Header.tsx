import React from 'react';
import styled from 'styled-components';
import { routes } from '../../services/routes';
import { HeaderButton } from './HeaderButton';
import { BsInstagram } from 'react-icons/bs';

const HeaderContainer = styled.div`
  overflow: hidden;
  position: sticky;
  top: 0;
  display: flex;
  margin: 0.5em;
  text-align: center;
  justify-content: center;
  * + * {
    margin: 0 1em 0 1em;
  }
`;

export const Header: React.FunctionComponent = () => {
  return (
    <HeaderContainer>
      <HeaderButton route={routes.home}>HOME</HeaderButton>
      <HeaderButton route={routes.home}>ABOUT</HeaderButton>
      <HeaderButton route={routes.recipes}>RECIPES</HeaderButton>
      <HeaderButton route={routes.home}>SHOP</HeaderButton>
      <HeaderButton route={routes.home}>SUBSCRIBE</HeaderButton>
      <HeaderButton route={routes.home}>CONTACT</HeaderButton>
      <BsInstagram color="purple" />
    </HeaderContainer>
  );
};
