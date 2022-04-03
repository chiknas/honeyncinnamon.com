import { TextField, Typography } from '@material-ui/core';
import { Button } from 'components/generic/Button/Button';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/dist/client/router';
import React, { useState } from 'react';
import { useUserService } from 'services/EntityServices/UserService/UserService';
import { routes } from 'services/routes';
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

const StyledActionButton = styled(Button)`
  flex: 1;
`;

const Error = styled(Typography)`
  color: red;
`;

const ActionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

export const LoginForm: React.FunctionComponent = () => {
  const [logginIn, setLogginIn] = useState(false);
  const [error, setError] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { emailLogin } = useUserService();
  const { t } = useTranslation();
  const { push } = useRouter();

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
      <ActionsContainer>
        <StyledActionButton type="submit" disabled={logginIn}>
          {t('profile.login')}
        </StyledActionButton>
        <StyledActionButton
          buttontype="info"
          disabled={logginIn}
          onClick={() => push(routes.register)}
        >
          {t('profile.register')}
        </StyledActionButton>
      </ActionsContainer>
    </FormContainer>
  );
};
