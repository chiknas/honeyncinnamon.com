import { Button, SwipeableDrawer } from '@material-ui/core';
import { useTranslation } from 'next-i18next';
import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import styled from 'styled-components';
import { getMenuItems } from '../MenuItems';
import { BurgerMenuItem } from './BurgerMenuItem';

const BurgerButton = styled(Button)`
  font-size: 1rem;
`;

export const BurgerMenu: React.FunctionComponent = () => {
  const { t } = useTranslation();

  const [open, setOpen] = useState(false);
  const toggleDrawer = (event: any) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setOpen((current) => !current);
  };

  const BurgerIngredients = getMenuItems(t).map((item, index) => (
    <BurgerMenuItem key={index} onClick={toggleDrawer}>
      {item}
    </BurgerMenuItem>
  ));

  return (
    <>
      <BurgerButton onClick={toggleDrawer}>
        <GiHamburgerMenu />
      </BurgerButton>
      <SwipeableDrawer open={open} onClose={toggleDrawer} onOpen={toggleDrawer}>
        {BurgerIngredients}
      </SwipeableDrawer>
    </>
  );
};
