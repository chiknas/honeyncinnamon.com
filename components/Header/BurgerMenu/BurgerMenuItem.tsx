import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';

const BurgerItemContainer = styled.div`
  padding: 0.3em 1em 0.3em 1em;
`;

type BurgerMenuItemProps = {
  onClick: (event: any) => void;
};

export const BurgerMenuItem: React.FunctionComponent<
  PropsWithChildren<BurgerMenuItemProps>
> = ({ children, onClick }) => {
  return (
    <BurgerItemContainer onClick={onClick}>{children}</BurgerItemContainer>
  );
};
