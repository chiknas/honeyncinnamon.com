import React from 'react';
import styled from 'styled-components';
import { Theme } from 'styles/Theme';
import { Typography } from '@material-ui/core';
import Link from 'next/link';
import { routes } from 'services/routes';
import { useTranslation } from 'next-i18next';

const FooterContainer = styled.div`
  padding: 1em;
  overflow: hidden;
  background-color: ${Theme.palette.background.default};
  bottom: 0;
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 1em;
`;

const Footer: React.FunctionComponent = () => {
  const { t } = useTranslation();
  return (
    <FooterContainer>
      <Link href={routes.privacyPolicy}>
        <a>
          <Typography variant="h6">{t('footer.privacy-policy')}</Typography>
        </a>
      </Link>
      <Link href={routes.cookiePolicy}>
        <a>
          <Typography variant="h6">{t('footer.cookie-policy')}</Typography>
        </a>
      </Link>
    </FooterContainer>
  );
};

export default React.memo(Footer);
