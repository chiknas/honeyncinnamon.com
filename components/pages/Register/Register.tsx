import { TextField, Button, Typography } from '@material-ui/core';
import useViewport from 'hooks/useViewport';
import { useTranslation } from 'next-i18next';
import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { Theme } from 'styles/Theme';
import { useRouter } from 'next/dist/client/router';
import { routes } from 'services/routes';
import { useUserService } from 'services/EntityServices/UserService/UserService';
import Head from 'next/head';

const RegisterContainer = styled.div<{ isMobile: boolean; minWidth: string }>`
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

const StyledLogin = styled(Button)`
  background-color: ${() => Theme.palette.primary.main};
  &:hover {
    background-color: ${() => Theme.palette.primary.dark};
    color: ${() => Theme.palette.primary.light};
  }
`;

const Error = styled(Typography)`
  color: red;
`;

export const Register: React.FunctionComponent = () => {
  const { t } = useTranslation();
  const { isMobile, bodyMaxWidth } = useViewport();
  const { push } = useRouter();
  const { emailRegister } = useUserService();

  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [registerInProgress, setRegisterInProgress] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      if (password !== confirmPassword) {
        setError(t('register.error.passwords-not-match'));
        return;
      }

      setRegisterInProgress(true);
      emailRegister(displayName, email, password)
        .then(() => push(routes.home))
        .catch((error) => {
          console.error(error);
          setError(t('error-with-status', { statusCode: 500 }));
        })
        .finally(() => setRegisterInProgress(false));
    },
    [confirmPassword, displayName, email, emailRegister, password, push, t]
  );

  return (
    <>
      <Head>
        <title>{t('page-title.register')}</title>
      </Head>
      <RegisterContainer isMobile={isMobile} minWidth={bodyMaxWidth}>
        <Typography variant="h2">{t('register.title')}</Typography>
        <FormContainer isMobile={isMobile} onSubmit={handleSubmit}>
          <StyledTextField
            required
            label={t('register.full-name')}
            variant="outlined"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          />
          <StyledTextField
            required
            label={t('register.email')}
            variant="outlined"
            value={email}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <StyledTextField
            required
            label={t('register.password')}
            variant="outlined"
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <StyledTextField
            required
            label={t('register.confirm-password')}
            variant="outlined"
            value={confirmPassword}
            type="password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <Error>{error}</Error>
          <StyledLogin type="submit" disabled={registerInProgress}>
            {t('register.apply')}
          </StyledLogin>
        </FormContainer>
      </RegisterContainer>
    </>
  );
};
