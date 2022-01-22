import { AdSense } from 'components/AdSense/AdSense';
import React from 'react';
import { useTheme } from '@material-ui/core';
import { AdContainer, ContentContainer } from './Layout';

export const MaxWidth = '960px';

export const MainLayout: React.FunctionComponent = ({ children }) => {
  const { palette } = useTheme();

  return (
    <>
      <AdContainer color={palette.background.paper}>
        <AdSense />
      </AdContainer>
      <ContentContainer maxWidth={MaxWidth}>{children}</ContentContainer>
      <AdContainer color={palette.background.paper}>
        <AdSense />
      </AdContainer>
    </>
  );
};
