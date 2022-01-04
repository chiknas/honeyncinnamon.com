import React, { useState } from 'react';
import styled from 'styled-components';
import { CommentsList } from './CommentsList';
import { useTranslation } from 'next-i18next';
import { usePostService } from 'services/EntityServices/PostService/PostService';
import { Button, Typography } from '@material-ui/core';
import { Theme } from 'styles/Theme';
import { CommentField } from '../CommentField/CommentField';
import { EntityType } from 'services/EntityServices/CommentService/types';

const CommentSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  * + * {
    flex: 1 1 auto;
  }
`;

const ShowCommentsButton = styled(Button)`
  margin: 1em;
  font-size: 1.5em;
  align-self: center;
  background-color: ${() => Theme.palette.primary.main};
  &:hover {
    background-color: ${() => Theme.palette.primary.light};
  }
`;

type CommentSectionProps = {
  id: string;
  entityType: EntityType;
};

export const CommentSection: React.FunctionComponent<CommentSectionProps> = ({
  id,
  entityType,
}) => {
  const [isCommentSectionOpen, setCommentSectionOpen] = useState(false);
  const { t } = useTranslation();
  const { getPostDetails } = usePostService();
  const { result: postDetails, loading: postDetailsLoading } =
    getPostDetails(id);

  return (
    <CommentSectionContainer>
      <CommentField
        entityId={id}
        entityType={entityType}
        onSubmit={() => setCommentSectionOpen(true)}
      />
      {!postDetailsLoading && !isCommentSectionOpen && (
        <ShowCommentsButton
          onClick={() => setCommentSectionOpen(true)}
          disabled={postDetails?.commentCount === 0}
        >
          <Typography>
            {t('comment-section.show-comments', {
              count: postDetails?.commentCount,
            })}
          </Typography>
        </ShowCommentsButton>
      )}
      {isCommentSectionOpen && <CommentsList id={id} />}
    </CommentSectionContainer>
  );
};
