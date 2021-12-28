import { useTranslation } from 'next-i18next';
import React from 'react';
import { getMenuItems } from '../MenuItems';

export const MainMenu: React.FunctionComponent = () => {
  const { t } = useTranslation();

  return <React.Fragment>{getMenuItems(t)}</React.Fragment>;
};
