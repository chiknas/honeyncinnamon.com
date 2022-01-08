import { Typography } from '@material-ui/core';
import React, { useState, useMemo } from 'react';
import styled from 'styled-components';
import { Comment } from 'services/EntityServices/CommentService/types';
import { CommentField } from '../CommentField/CommentField';
import { useUserService } from 'services/EntityServices/UserService/UserService';
import useViewport from 'hooks/useViewport';
import { CommentActionButtons } from './CommentActionButtons';
import {
  CommentBox,
  CommentBoxActionContainer,
  CommentContainer,
  CommentTitle,
} from './Comment.style';

const CommentTextBox = styled(Typography)`
  font-size: 1em;
  font-weight: 340;
  word-break: break-word;
`;

type CommentDetailsProps = {
  comment: Comment;
  onEdit: () => void;
};

export const CommentDetails: React.FunctionComponent<CommentDetailsProps> = ({
  comment,
  onEdit,
}) => {
  const { isMobile } = useViewport();
  const [hover, setIsHover] = useState(false);
  const [isResponding, setIsResponding] = useState(false);

  const { getCurrentUser } = useUserService();
  const { result: currentUser } = getCurrentUser();

  const isUserSignedIn = useMemo(
    () => (currentUser !== undefined ? true : false),
    [currentUser]
  );

  // the commentId to respond to
  // to now allow deep nesting if this is a top level comment then use that
  // else use the commentId of the comment we are responding to. this will
  // keep all comments only 1 level down.
  const responseCommentId = useMemo(
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
          <CommentActionButtons
            comment={comment}
            onEditClick={onEdit}
            onRespondClick={() =>
              setIsResponding((currentState) => !currentState)
            }
          />
        </CommentBoxActionContainer>
      </CommentBox>
      {isResponding && (
        <CommentField
          commentId={responseCommentId}
          entityId={comment.entityId}
          entityType={comment.entityType}
          onSubmit={() => setIsResponding(false)}
        />
      )}
    </CommentContainer>
  );
};
