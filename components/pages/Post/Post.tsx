import React from 'react';
import { CommentSection } from 'components/Comment/CommentSection/CommentSection';
import styled from 'styled-components';
import { Divider } from '@material-ui/core';

type PostProps = {
  id: string;
  data: string;
};

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.2em;
  gap: 1rem;
`;

export const Post: React.FunctionComponent<PostProps> = ({ id, data }) => {
  return (
    <PostContainer>
      <div dangerouslySetInnerHTML={{ __html: data }} />
      <Divider />
      <CommentSection id={id} />
    </PostContainer>
  );
};
