import React, { useState } from 'react';
import { CommentSection } from 'components/Comment/CommentSection/CommentSection';
import styled from 'styled-components';
import { Button, Divider, Typography } from '@material-ui/core';
import { Theme } from 'styles/Theme';
import { useTranslation } from 'next-i18next';

type PostProps = {
  id: string;
  data: string;
};

const PostContainer = styled.div`
  padding: 1.2em;
`;

const CommentSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 1em;
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

export const Post: React.FunctionComponent<PostProps> = ({ id, data }) => {
  const [isCommentSectionOpen, setCommentSectionOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <PostContainer>
      <div dangerouslySetInnerHTML={{ __html: data }} />
      <Divider />
      <CommentSectionContainer>
        {!isCommentSectionOpen && (
          <ShowCommentsButton onClick={() => setCommentSectionOpen(true)}>
            <Typography>{t('post.show-comments', { count: 1 })}</Typography>
          </ShowCommentsButton>
        )}
        {isCommentSectionOpen && <CommentSection id={id} />}
      </CommentSectionContainer>
    </PostContainer>
  );
};
