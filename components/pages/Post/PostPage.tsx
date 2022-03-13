import React from 'react';
import { Divider, Typography } from '@material-ui/core';
import { CommentEntityType } from 'services/EntityServices/CommentService/types';
import { PageContainer } from '../page.style';
import dynamic from 'next/dynamic';
import { PostDetails } from './type';
import styled from 'styled-components';

const PostTitle = styled(Typography)`
  text-decoration: underline;
  text-decoration-thickness: 5%;
`;

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

type PostProps = {
  id: string;
  postDetails: PostDetails;
  content: string;
};

export const PostPage: React.FunctionComponent<PostProps> = ({
  id,
  postDetails,
  content,
}) => {
  // the user wont have to see this asap. lazy load to improve performance.
  const CommentSection = dynamic(
    () => import('components/Comment/CommentSection/CommentSection')
  );
  return (
    <PageContainer>
      <PostTitle variant="h3">{postDetails.title}</PostTitle>
      <img src={postDetails.img} />
      <PostContainer dangerouslySetInnerHTML={{ __html: content }} />
      <Divider />
      <CommentSection id={id} entityType={CommentEntityType.POSTS} />
    </PageContainer>
  );
};
