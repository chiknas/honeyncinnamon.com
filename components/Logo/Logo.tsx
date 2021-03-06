import useViewport from 'hooks/useViewport';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/dist/client/router';
import React, { useCallback } from 'react';
import styled from 'styled-components';
import { routes } from '../../services/routes';

const Clickable = styled.div`
  cursor: pointer;
`;

const ImageContainer = styled.div<{ isMobile?: boolean }>`
  margin: ${(p) => (p.isMobile ? '1em' : '7em')};
`;

export const Logo: React.FunctionComponent = () => {
  const router = useRouter();
  const { i18n } = useTranslation();
  const { isMobile } = useViewport();

  const onClick = useCallback(() => {
    router.push(routes.home);
  }, [router]);
  return (
    <Clickable onClick={onClick}>
      <ImageContainer isMobile={isMobile}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`/logo-${i18n.language?.toLowerCase() ?? 'en'}.jpg`}
          alt="logo"
        />
      </ImageContainer>
    </Clickable>
  );
};
