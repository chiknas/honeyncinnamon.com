import { Button, Typography } from '@material-ui/core';
import React, { useState, useMemo } from 'react';
import styled from 'styled-components';
import { Theme } from 'styles/Theme';
import { Comment } from 'services/EntityServices/CommentService/types';
import { CommentField } from '../CommentField/CommentField';
import { useTranslation } from 'next-i18next';
import { useUserService } from 'services/EntityServices/UserService/UserService';
import useViewport from 'hooks/useViewport';

const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const CommentTitle = styled(Typography)`
  font-size: 1em;
  font-weight: 390;
  padding-top: 0.5rem;
`;

const CommentTextBox = styled(Typography)`
  font-size: 1em;
  font-weight: 340;
  word-break: break-word;
`;

const CommentBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  background-color: ${Theme.palette.background.paper};
  border-radius: 8px;
  padding: 1rem;
`;

const CommentBoxActionContainer = styled.div<{ visible?: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  visibility: ${(props) => (props.visible ? 'visible' : 'hidden')};
  opacity: ${(props) => (props.visible ? '1' : '0')};
  transition: opacity 0.3s linear;
`;

type CommentDetailsProps = {
  comment: Comment;
};

export const CommentDetails: React.FunctionComponent<CommentDetailsProps> = ({
  comment,
}) => {
  const { isMobile } = useViewport();
  const [hover, setIsHover] = useState(false);
  const { getCurrentUser } = useUserService();
  const { result: currentUser } = getCurrentUser();
  const [isResponding, setIsResponding] = useState(false);
  const { t } = useTranslation();
  const isUserSignedIn = useMemo(
    () => (currentUser !== undefined ? true : false),
    [currentUser]
  );

  // the commentId to respond to
  // to now allow deep nesting if this is a top level comment then use that
  // else use the commentId of the comment we are responding to. this will
  // keep all comments only 1 level down.
  const commentId = useMemo(
    () => (comment.commentId !== '' ? comment.commentId : comment.id),
    [comment.commentId, comment.id]
  );

  return (
    <CommentContainer
      onMouseEnter={() => !isMobile && setIsHover(true)}
      onMouseLeave={() => !isMobile && setIsHover(false)}
    >
      <CommentTitle>{comment.userDisplayName}</CommentTitle>
      <CommentBox>
        <CommentTextBox>{comment.body}</CommentTextBox>
        <CommentBoxActionContainer
          visible={isUserSignedIn && (isMobile || hover)}
        >
          <Button
            onClick={() => setIsResponding((currentState) => !currentState)}
          >
            {t('comment-section.respond')}
          </Button>
        </CommentBoxActionContainer>
      </CommentBox>
      {isResponding && (
        <CommentField
          commentId={commentId}
          entityId={comment.entityId}
          entityType={comment.entityType}
          onSubmit={() => setIsResponding(false)}
        />
      )}
    </CommentContainer>
  );
};
