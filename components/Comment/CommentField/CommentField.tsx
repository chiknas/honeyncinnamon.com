import { Button, InputBase, Typography } from '@material-ui/core';
import { LoginForm } from 'components/LoginForm/LoginForm';
import { withPoperPanel } from 'components/PoperPanel/PoperPanel';
import { UserProfilePic } from 'components/UserProfilePic/UserProfilePic';
import { useTranslation } from 'next-i18next';
import React, { useMemo } from 'react';
import { useUserService } from 'services/EntityServices/UserService/UserService';
import styled from 'styled-components';

const CommentBoxContainer = styled.div`
  padding: 1rem;
  box-shadow: 0 2px 10px 0 rgb(0 0 0 / 16%);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  * > * {
    margin: 0 0.5rem 0 0.5rem;
  }
`;

const StyledTextField = styled(InputBase)`
  flex: 1 1 auto;
  height: 100px;
  border-bottom: 0;
  overflow: auto;
`;

const InputRowContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const ActionsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const StyledTypography = styled(Typography)`
  text-align: center;
  font-size: 1rem;
`;

export const CommentField: React.FunctionComponent = () => {
  const { t } = useTranslation();
  const { getCurrentUser } = useUserService();
  const { result: currentUser, loading } = getCurrentUser();

  const LoginActionText = useMemo(() => {
    const LoginTextWithPoper = withPoperPanel(
      <StyledTypography>{t('comment-section.login-action')}</StyledTypography>
    );
    return (
      <LoginTextWithPoper>
        <LoginForm />
      </LoginTextWithPoper>
    );
  }, [t]);

  return (
    <>
      {!loading && currentUser ? (
        <CommentBoxContainer>
          <InputRowContainer>
            <UserProfilePic src={currentUser?.photoUrl} />
            <StyledTextField
              minRows={5}
              multiline={true}
              placeholder={t('comment-section.comment-placeholder')}
            />
          </InputRowContainer>
          <ActionsContainer>
            <Button>{t('comment-section.submit')}</Button>
          </ActionsContainer>
        </CommentBoxContainer>
      ) : (
        LoginActionText
      )}
    </>
  );
};
