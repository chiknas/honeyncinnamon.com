import React, { useState } from 'react';
import styled from 'styled-components';
import { CommentsList } from './CommentsList';
import { useTranslation } from 'next-i18next';
import { Button, Typography } from '@material-ui/core';
import { Theme } from 'styles/Theme';
import { CommentField } from '../CommentField/CommentField';
import { CommentEntityType } from 'services/EntityServices/CommentService/types';
import { useCommentService } from 'services/EntityServices/CommentService/CommentService';

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
  background-color: ${Theme.palette.primary.main};
  &:hover {
    background-color: ${Theme.palette.primary.light};
  }
`;

type CommentSectionProps = {
  id: string;
  entityType: CommentEntityType;
};

const CommentSection: React.FunctionComponent<CommentSectionProps> = ({
  id,
  entityType,
}) => {
  const { t } = useTranslation();
  const [isCommentSectionOpen, setCommentSectionOpen] = useState(false);
  const { getCommentAggregation } = useCommentService();
  const { result, loading } = getCommentAggregation(id);

  return (
    <CommentSectionContainer>
      <CommentField
        entityId={id}
        entityType={entityType}
        onSubmit={() => setCommentSectionOpen(true)}
      />
      {!loading && !isCommentSectionOpen && (
        <ShowCommentsButton
          onClick={() => setCommentSectionOpen(true)}
          disabled={
            result?.commentCount === undefined || result?.commentCount === 0
          }
        >
          <Typography>
            {t('comment-section.show-comments', {
              count: result?.commentCount ?? 0,
            })}
          </Typography>
        </ShowCommentsButton>
      )}
      {isCommentSectionOpen && <CommentsList id={id} />}
    </CommentSectionContainer>
  );
};

export default CommentSection;
