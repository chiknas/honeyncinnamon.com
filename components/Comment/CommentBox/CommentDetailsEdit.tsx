import { InputBase } from '@material-ui/core';
import { useTranslation } from 'next-i18next';
import React, { useMemo, useState } from 'react';
import { Comment } from 'services/EntityServices/CommentService/types';
import { useUserService } from 'services/EntityServices/UserService/UserService';
import styled from 'styled-components';
import {
  CommentContainer,
  CommentTitle,
  CommentBox,
  CommentBoxActionContainer,
} from './Comment.style';
import { CommentEditActionButtons } from './CommentEditActionButtons';

const CommentField = styled(InputBase)`
  font-size: 1rem;
  font-weight: 340;
  word-break: break-word;
  overflow: auto;
  background-color: white;
  padding: 1rem;
  border-radius: 8px;
`;

interface CommentDetailsEditProps {
  comment: Comment;
  onCancel: () => void;
}

export const CommentDetailsEdit: React.FunctionComponent<CommentDetailsEditProps> =
  ({ comment, onCancel }) => {
    const { t } = useTranslation();
    const [commentBody, setCommentBody] = useState<string>(comment.body);

    const { getCurrentUser } = useUserService();
    const { result: currentUser } = getCurrentUser();

    const isUserSignedIn = useMemo(
      () => (currentUser !== undefined ? true : false),
      [currentUser]
    );

    return (
      <CommentContainer>
        <CommentTitle>{comment.userDisplayName}</CommentTitle>
        <CommentBox>
          <CommentField
            multiline={true}
            value={commentBody}
            minRows={3}
            max-maxRows={6}
            onChange={(e) => setCommentBody(e.target.value)}
            placeholder={t('comment-section.comment-placeholder')}
          />
          <CommentBoxActionContainer visible={isUserSignedIn}>
            <CommentEditActionButtons
              comment={{ ...comment, body: commentBody }}
              onCancel={onCancel}
            />
          </CommentBoxActionContainer>
        </CommentBox>
      </CommentContainer>
    );
  };
