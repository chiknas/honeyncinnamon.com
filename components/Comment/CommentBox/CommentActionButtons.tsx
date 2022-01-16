import { Button, IconButton } from '@material-ui/core';
import { useTranslation } from 'next-i18next';
import React, { useMemo } from 'react';
import { MdDeleteForever } from 'react-icons/md';
import { useCommentService } from 'services/EntityServices/CommentService/CommentService';
import { Comment } from 'services/EntityServices/CommentService/types';
import { useUserService } from 'services/EntityServices/UserService/UserService';

interface CommentActionButtonsProps {
  comment: Comment;
  onEditClick?: () => void;
  onRespondClick?: () => void;
}

export const CommentActionButtons: React.FunctionComponent<CommentActionButtonsProps> =
  ({ comment, onEditClick, onRespondClick }) => {
    const { t } = useTranslation();

    const { getCurrentUser } = useUserService();
    const { deleteComment } = useCommentService();
    const { result: currentUser } = getCurrentUser();

    const isUsersComment = useMemo(
      () => currentUser?.id === comment.userId,
      [comment.userId, currentUser?.id]
    );
    const isUserSignedIn = useMemo(
      () => (currentUser !== undefined ? true : false),
      [currentUser]
    );

    return (
      <React.Fragment>
        {isUsersComment && (
          <React.Fragment>
            <IconButton
              style={{ flex: '0 1 auto' }}
              onClick={() => comment.id && deleteComment(comment)}
              disabled={!isUserSignedIn}
            >
              <MdDeleteForever size={15} />
            </IconButton>
            <Button
              style={{ flex: '0 1 auto' }}
              disabled={!isUserSignedIn}
              onClick={() => onEditClick?.()}
            >
              {t('comment-section.edit')}
            </Button>
          </React.Fragment>
        )}
        <Button
          style={{ flex: '0 1 auto' }}
          onClick={onRespondClick}
          disabled={!isUserSignedIn}
        >
          {t('comment-section.respond')}
        </Button>
      </React.Fragment>
    );
  };
