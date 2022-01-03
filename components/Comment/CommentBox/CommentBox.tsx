import { UserProfilePic } from 'components/UserProfilePic/UserProfilePic';
import React from 'react';
import styled from 'styled-components';
import { CommentDetails } from './CommentDetails';
import { Comment } from 'services/EntityServices/CommentService/types';

type CommentBoxProps = {
  comment: Comment;
};

const CommentBoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  * > * {
    margin: 0 0.5rem 0 0.5rem;
  }
`;

export const CommentBox: React.FunctionComponent<CommentBoxProps> = ({
  comment,
}) => {
  return (
    <CommentBoxContainer>
      <UserProfilePic src={comment.userPhotoUrl} />
      <CommentDetails comment={comment} />
    </CommentBoxContainer>
  );
};
