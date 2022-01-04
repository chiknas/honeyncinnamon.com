import { Button, InputBase, Typography } from '@material-ui/core';
import { LoginForm } from 'components/LoginForm/LoginForm';
import { withPoperPanel } from 'components/PoperPanel/PoperPanel';
import { UserProfilePic } from 'components/UserProfilePic/UserProfilePic';
import { useTranslation } from 'next-i18next';
import React, { useCallback, useMemo, useState } from 'react';
import { useCommentService } from 'services/EntityServices/CommentService/CommentService';
import { useUserService } from 'services/EntityServices/UserService/UserService';
import styled from 'styled-components';
import { EntityType } from 'services/EntityServices/CommentService/types';

const CommentBoxContainer = styled.div`
  padding: 1rem;
  box-shadow: 0 2px 10px 0 rgb(0 0 0 / 16%);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  * > * {
    margin: 0 0.5rem 0 0.5rem;
  }
`;

const StyledTextField = styled(InputBase)`
  font-size: 1rem;
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

type CommentFieldProps = {
  // the entity (post/recipes) that we are commenting on
  entityId: string;
  entityType: EntityType;
  // if its a response to an existing comment on the entity
  commentId?: string;
  // optional function to run when the comment is submitted
  onSubmit?: () => void;
};

export const CommentField: React.FunctionComponent<CommentFieldProps> = ({
  entityId,
  entityType,
  commentId = '',
  onSubmit,
}) => {
  const { t } = useTranslation();
  const { getCurrentUser } = useUserService();
  const { result: currentUser, loading } = getCurrentUser();
  const { postComment } = useCommentService();
  const [comment, setComment] = useState<string>('');

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

  const submitComment = useCallback(() => {
    const commentNew = {
      entityId,
      commentId,
      entityType,
      body: comment,
      userPhotoUrl: currentUser?.photoUrl ?? '',
      userDisplayName: currentUser?.displayName ?? '',
    };
    postComment(commentNew)
      .catch((e) => console.error(e))
      .finally(() => {
        setComment('');
        onSubmit?.();
      });
  }, [
    comment,
    commentId,
    currentUser?.displayName,
    currentUser?.photoUrl,
    entityId,
    entityType,
    onSubmit,
    postComment,
  ]);

  return (
    <>
      {!loading && currentUser ? (
        <CommentBoxContainer>
          <InputRowContainer>
            <UserProfilePic src={currentUser?.photoUrl} />
            <StyledTextField
              multiline={true}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder={t('comment-section.comment-placeholder')}
            />
          </InputRowContainer>
          <ActionsContainer>
            <Button onClick={submitComment}>
              {t('comment-section.submit')}
            </Button>
          </ActionsContainer>
        </CommentBoxContainer>
      ) : (
        LoginActionText
      )}
    </>
  );
};
