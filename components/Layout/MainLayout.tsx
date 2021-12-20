import { AdSense } from 'components/AdSense/AdSense';
import React from 'react';
import { useTheme } from '@material-ui/core';
import { AdContainer, ContentContainer } from './Layout';
import Image from 'next/Image';
import { useTranslation } from 'next-i18next';
import styled from 'styled-components';

const ImageContainer = styled.div`
  margin: 7em;
`;

export const MainLayout: React.FunctionComponent = ({ children }) => {
  const { palette } = useTheme();
  const { i18n } = useTranslation();

  return (
    <>
      <AdContainer color={palette.background.paper}>
        <AdSense />
      </AdContainer>
      <ContentContainer maxWidth="960px">
        <ImageContainer>
          <Image
            src={`/logo-${i18n.language?.toLowerCase() ?? 'en'}.jpg`}
            alt="logo"
            width={'4000px'}
            height={'867px'}
            layout="responsive"
            priority={true}
          />
        </ImageContainer>
        {children}
      </ContentContainer>
      <AdContainer color={palette.background.paper}>
        <AdSense />
      </AdContainer>
    </>
  );
};
