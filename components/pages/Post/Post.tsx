import React, { useState } from 'react';
import { CommentBox } from 'components/CommentBox/CommentBox';
import styled from 'styled-components';
import { Button, Divider, Typography } from '@material-ui/core';
import { Theme } from 'styles/Theme';
import { useTranslation } from 'next-i18next';

type PostProps = {
  data: string;
};

const PostContainer = styled.div`
  padding: 3em;
`;

const CommentSectionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 1em;
`;

const ShowCommentsButton = styled(Button)`
  margin: 1em;
  font-size: 1.5em;
  flex: 0 1 auto;
  background-color: ${() => Theme.palette.primary.main};
  &:hover {
    background-color: ${() => Theme.palette.primary.light};
  }
`;

export const Post: React.FunctionComponent<PostProps> = ({ data }) => {
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
        {isCommentSectionOpen && (
          <CommentBox
            comment={{
              user: { firstName: 'FirstName', lastName: 'LastName' },
              body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            }}
          />
        )}
      </CommentSectionContainer>
    </PostContainer>
  );
};
