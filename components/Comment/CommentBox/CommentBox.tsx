import { UserProfilePic } from 'components/UserProfilePic/UserProfilePic';
import React, { useState } from 'react';
import styled from 'styled-components';
import { CommentDetails } from './CommentDetails';
import { Comment } from 'services/EntityServices/CommentService/types';
import { CommentDetailsEdit } from './CommentDetailsEdit';

type CommentBoxProps = {
  comment: Comment;
};

const CommentBoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`;

export const CommentBox: React.FunctionComponent<CommentBoxProps> = ({
  comment,
}) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <CommentBoxContainer>
      <UserProfilePic />
      {!isEditing ? (
        <CommentDetails comment={comment} onEdit={() => setIsEditing(true)} />
      ) : (
        <CommentDetailsEdit
          comment={comment}
          onCancel={() => setIsEditing(false)}
        />
      )}
    </CommentBoxContainer>
  );
};
