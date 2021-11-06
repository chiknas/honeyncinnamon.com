import { useTheme } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import { Logo } from '../Logo/Logo';

const HeaderContainer = styled.div`
  overflow: hidden;
  position: sticky;
  top: 0;
  background-color: ${(props) => props.color};
  height: 9vh;
  display: flex;
  justify-content: center;
  align-items: stretch;
`;

export const Header: React.FunctionComponent = () => {
  const { palette } = useTheme();

  return (
    <HeaderContainer color={palette.background.paper}>
      <Logo />
    </HeaderContainer>
  );
};
