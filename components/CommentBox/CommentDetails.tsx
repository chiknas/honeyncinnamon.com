import { Typography } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import { Theme } from 'styles/Theme';
import { Comment } from './CommentBox';

const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const CommentTitle = styled(Typography)`
  font-size: 1.3em;
  font-weight: 390;
  padding: 0.5rem 0 0.5rem 0;
`;

const CommentTextBox = styled(Typography)`
  font-size: 1em;
  font-weight: 340;
  background-color: ${Theme.palette.background.paper};
  border-radius: 8px;
  padding: 1rem;
  word-break: break-word;
`;

type CommentDetailsProps = {
  comment: Comment;
};

export const CommentDetails: React.FunctionComponent<CommentDetailsProps> = ({
  comment,
}) => {
  const user = comment.user;
  const title = `${user.firstName} ${user.lastName}`;

  return (
    <CommentContainer>
      <CommentTitle>{title}</CommentTitle>
      <CommentTextBox>{comment.body}</CommentTextBox>
    </CommentContainer>
  );
};