import React, { useState } from 'react';
import styled from 'styled-components';
import { Theme } from 'styles/Theme';
import { Checkbox, TextField, Typography, Divider } from '@material-ui/core';
import { Button } from 'components/generic/Button/Button';
import Link from 'next/link';
import { routes } from 'services/routes';
import { useTranslation } from 'next-i18next';
import { useNewsletterService } from 'services/EntityServices/NewsletterService/NewsletterService';

const FooterContainer = styled.div`
  padding: 1em;
  overflow: hidden;
  background-color: ${Theme.palette.background.default};

  bottom: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1em;
  background-color: #d9ecd0;
`;

const BoxContainer = styled.div<{ horizontal?: boolean }>`
  flex: 1;
  display: flex;
  flex-direction: ${(p) => (p.horizontal ? 'row' : 'column')};
  gap: 1rem;
`;

const NewsletterContainer = styled(BoxContainer)`
  max-width: 500px;
  @media (min-width: 500px) {
    min-width: 500px;
  }
  @media (max-width: 500px) {
    min-width: 90vw;
  }
  margin-left: auto;
  margin-right: auto;
`;

const ConsentContainer = styled(Typography)`
  align-self: center;
`;

const RegisterButton = styled(Button)`
  color: ${Theme.palette.primary.contrastText};
  background-color: ${Theme.palette.primary.main};
  &:hover {
    background-color: ${Theme.palette.primary.dark};
    color: ${Theme.palette.primary.light};
  }
`;

const StyledTextField = styled(TextField)`
  background-color: ${Theme.palette.background.default};
`;

const Footer: React.FunctionComponent = () => {
  const { t } = useTranslation();
  const { register } = useNewsletterService();
  const [email, setEmail] = useState<string | undefined>();
  const [consent, setConsent] = useState(false);
  return (
    <FooterContainer>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          email &&
            register(email).finally(() => {
              setEmail('');
              setConsent(false);
              alert(t('footer.newsletter.success'));
            });
        }}
      >
        <NewsletterContainer>
          <Typography noWrap>{t('footer.newsletter.title')}</Typography>
          <StyledTextField
            label={t('footer.newsletter.email')}
            variant="outlined"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
          />
          <BoxContainer horizontal={true}>
            <Checkbox
              checked={consent}
              value={consent}
              onChange={() => setConsent((p) => !p)}
            />
            <ConsentContainer noWrap>
              {t('footer.newsletter.consent')}
            </ConsentContainer>
          </BoxContainer>
          <RegisterButton disabled={!consent || !email} type="submit">
            {t('footer.newsletter.register')}
          </RegisterButton>
        </NewsletterContainer>
      </form>
      <Divider />
      <BoxContainer horizontal={true}>
        <Link href={routes.privacyPolicy}>
          <a>
            <Typography>{t('footer.privacy-policy')}</Typography>
          </a>
        </Link>
        <Link href={routes.cookiePolicy}>
          <a>
            <Typography>{t('footer.cookie-policy')}</Typography>
          </a>
        </Link>
      </BoxContainer>
    </FooterContainer>
  );
};

export default React.memo(Footer);
