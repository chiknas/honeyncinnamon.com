import { Button, TextField, Typography } from '@material-ui/core';
import { useTranslation } from 'next-i18next';
import React, { useState } from 'react';
import { useUserService } from 'services/UserService/UserService';
import styled from 'styled-components';
import { Theme } from 'styles/Theme';

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2em;
  background-color: ${() => Theme.palette.secondary.main};
  padding: 1em 3em 3em 3em;
  border-radius: 10px;
`;

const StyledTextField = styled(TextField)`
  width: 300px;
  background-color: ${() => Theme.palette.background.default};
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

export const LoginForm: React.FunctionComponent = () => {
  const [logginIn, setLogginIn] = useState(false);
  const [error, setError] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { emailLogin } = useUserService();
  const { t } = useTranslation();

  return (
    <FormContainer
      onSubmit={(event) => {
        event.preventDefault();
        setLogginIn(true);
        emailLogin(email, password)
          .catch(() => setError(true))
          .finally(() => setLogginIn(false));
      }}
    >
      <h1>{t('profile.title')}</h1>
      <StyledTextField
        label={t('profile.email')}
        variant="outlined"
        value={email}
        error={error}
        onChange={(state) => setEmail(state.currentTarget.value)}
      />
      <StyledTextField
        type="password"
        label={t('profile.password')}
        variant="outlined"
        value={password}
        error={error}
        onChange={(state) => setPassword(state.currentTarget.value)}
      />
      {error && <Error>{t('profile.error')}</Error>}
      <StyledLogin type="submit" disabled={logginIn}>
        {t('profile.login')}
      </StyledLogin>
    </FormContainer>
  );
};
