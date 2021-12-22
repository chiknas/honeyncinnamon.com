import { UserProfilePic } from 'components/UserProfilePic/UserProfilePic';
import React from 'react';
import styled from 'styled-components';
import { CommentDetails } from './CommentDetails';

interface User {
  firstName: string;
  lastName: string;
}

export interface Comment {
  user: User;
  body: string;
}

type CommentBoxProps = {
  comment: Comment;
};

const CommentBoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  * > * {
    margin: 0 2rem 0 2rem;
  }
`;

export const CommentBox: React.FunctionComponent<CommentBoxProps> = ({
  comment,
}) => {
  return (
    <CommentBoxContainer>
      <UserProfilePic />
      <CommentDetails comment={comment} />
    </CommentBoxContainer>
  );
};
