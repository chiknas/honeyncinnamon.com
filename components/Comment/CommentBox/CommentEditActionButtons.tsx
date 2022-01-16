import { Button } from '@material-ui/core';
import { useTranslation } from 'next-i18next';
import React from 'react';
import { Comment } from 'services/EntityServices/CommentService/types';
import { useCommentService } from 'services/EntityServices/CommentService/CommentService';

interface CommentEditActionButtonsProps {
  comment: Comment;
  onCancel?: () => void;
}

export const CommentEditActionButtons: React.FunctionComponent<CommentEditActionButtonsProps> =
  ({ comment, onCancel }) => {
    const { t } = useTranslation();
    const { updateComment } = useCommentService();
    return (
      <React.Fragment>
        <Button style={{ flex: '0 1 auto' }} onClick={onCancel}>
          {t('comment-section.cancel')}
        </Button>
        <Button
          style={{ flex: '0 1 auto' }}
          onClick={() => {
            updateComment(comment);
            onCancel?.();
          }}
        >
          {t('comment-section.submit')}
        </Button>
      </React.Fragment>
    );
  };
