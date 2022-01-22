import React, { useState } from 'react';
import styled from 'styled-components';
import { Button, TextField, Typography } from '@material-ui/core';
import { Theme } from 'styles/Theme';
import { useTranslation } from 'next-i18next';
import useViewport from 'hooks/useViewport';

const ContactUsContainer = styled.div<{ isMobile: boolean; minWidth: string }>`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 3em;
  padding: ${(props) => (props.isMobile ? '1em' : '3em')};
  ${(props) => !props.isMobile && `min-width: ${props.minWidth};`}
`;

const FormContainer = styled.form<{ isMobile: boolean }>`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2em;
  border-radius: 8px;
  ${(props) => !props.isMobile && 'padding: 5em;'}
  ${(props) => !props.isMobile && 'border: 1px solid #e2e2e2;'}
`;

const StyledTextField = styled(TextField)`
  background-color: ${Theme.palette.background.default};
`;

const StyledMultiLineTextField = styled(TextField)`
  background-color: ${Theme.palette.background.default};
  height: 100px;
`;

const StyledLogin = styled(Button)`
  margin-top: 1rem;
  background-color: ${() => Theme.palette.primary.main};
  &:hover {
    background-color: ${() => Theme.palette.primary.dark};
    color: ${() => Theme.palette.primary.light};
  }
`;

const FooterMessage = styled(Typography)`
  text-align: left;
  color: ${Theme.palette.text.hint};
`;

interface ContactMessage {
  fullName: string;
  subject: string;
  email: string;
  body: string;
}

export const ContactUs: React.FunctionComponent = () => {
  const { t } = useTranslation();
  const { isMobile, bodyMaxWidth } = useViewport();
  const [contactMessage, setContactMessage] = useState<ContactMessage>({
    fullName: '',
    subject: '',
    email: '',
    body: '',
  });
  return (
    <ContactUsContainer isMobile={isMobile} minWidth={bodyMaxWidth}>
      <Typography variant="h2">{t('contact-us.title')}</Typography>
      <FormContainer
        isMobile={isMobile}
        onSubmit={(e) => {
          e.preventDefault();
          console.log(contactMessage);
        }}
      >
        <StyledTextField
          required
          label={t('contact-us.full-name')}
          variant="outlined"
          value={contactMessage.fullName}
          onChange={(e) =>
            setContactMessage((currentMessage) => ({
              ...currentMessage,
              fullName: e.target.value,
            }))
          }
        />
        <StyledTextField
          required
          label={t('contact-us.subject')}
          variant="outlined"
          value={contactMessage.subject}
          onChange={(e) =>
            setContactMessage((currentMessage) => ({
              ...currentMessage,
              subject: e.target.value,
            }))
          }
        />
        <StyledTextField
          required
          label={t('contact-us.email')}
          variant="outlined"
          value={contactMessage.email}
          type="email"
          onChange={(e) =>
            setContactMessage((currentMessage) => ({
              ...currentMessage,
              email: e.target.value,
            }))
          }
        />
        <StyledMultiLineTextField
          required
          minRows={5}
          multiline={true}
          label={t('contact-us.message')}
          variant="outlined"
          value={contactMessage.body}
          onChange={(e) =>
            setContactMessage((currentMessage) => ({
              ...currentMessage,
              body: e.target.value,
            }))
          }
        />
        <StyledLogin type="submit">{t('contact-us.send')}</StyledLogin>
      </FormContainer>
      <FooterMessage variant="h6">
        {t('contact-us.footer-message')}
      </FooterMessage>
    </ContactUsContainer>
  );
};
