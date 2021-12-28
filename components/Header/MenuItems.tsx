import React from 'react';
import { routes } from 'services/routes';
import { HeaderButton } from './HeaderButton';

/**
 * All the items we want to show for any menu on the header
 * @param t translation function to use for the menu titles
 * @returns list of react comps to render
 */
export const getMenuItems = (t: (key: string) => string): React.ReactNode[] => [
  <HeaderButton key={'menu-item-1'} route={routes.home}>
    {t('header.home')}
  </HeaderButton>,
  <HeaderButton key={'menu-item-2'} route={routes.home}>
    {t('header.about')}
  </HeaderButton>,
  <HeaderButton key={'menu-item-3'} route={routes.recipes}>
    {t('header.recipes')}
  </HeaderButton>,
  <HeaderButton key={'menu-item-4'} route={routes.home}>
    {t('header.shop')}
  </HeaderButton>,
  <HeaderButton key={'menu-item-5'} route={routes.home}>
    {t('header.subscribe')}
  </HeaderButton>,
  <HeaderButton key={'menu-item-6'} route={routes.home}>
    {t('header.contact')}
  </HeaderButton>,
];
