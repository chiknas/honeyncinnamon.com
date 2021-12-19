import { AdSense } from 'components/AdSense/AdSense';
import React from 'react';
import { useTheme } from '@material-ui/core';
import { AdContainer, ContentContainer } from './Layout';

export const MobileLayout: React.FunctionComponent = ({ children }) => {
  const { palette } = useTheme();
  return (
    <>
      <ContentContainer maxWidth="600px">{children}</ContentContainer>
      <AdContainer color={palette.background.paper}>
        <AdSense />
      </AdContainer>
    </>
  );
};
