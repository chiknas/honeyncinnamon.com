import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/dist/client/router';
import React from 'react';
import styled from 'styled-components';
import { routes } from '../../services/routes';

const Clickable = styled.div`
  cursor: pointer;
`;

const ImageContainer = styled.div`
  margin: 7em;
`;

export const Logo: React.FunctionComponent = () => {
  const router = useRouter();
  const { i18n } = useTranslation();

  const onClick = () => {
    router.push(routes.home);
  };
  return (
    <Clickable onClick={onClick}>
      <ImageContainer>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`/logo-${i18n.language?.toLowerCase() ?? 'en'}.jpg`}
          alt="logo"
        />
      </ImageContainer>
    </Clickable>
  );
};
