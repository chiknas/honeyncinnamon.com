import React from 'react';
import { Divider, Typography } from '@material-ui/core';
import { CommentEntityType } from 'services/EntityServices/CommentService/types';
import { PageContainer } from '../page.style';
import dynamic from 'next/dynamic';
import { PostDetails } from './type';
import styled from 'styled-components';
import Head from 'next/head';
import { Image, ImageRatioType } from 'components/Image/Image';

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
    <>
      <Head>
        <title>{postDetails.title}</title>
      </Head>
      <PageContainer>
        <PostTitle variant="h3">{postDetails.title}</PostTitle>
        <Image
          src={postDetails.img}
          alt={postDetails.img}
          imageRatioType={ImageRatioType.LANDSCAPE}
          placeholder="blur"
          blurDataURL={`${postDetails.img.replace('.jpg', '-blurred.jpg')}`}
        />
        <PostContainer dangerouslySetInnerHTML={{ __html: content }} />
        <Divider />
        <CommentSection id={id} entityType={CommentEntityType.POSTS} />
      </PageContainer>
    </>
  );
};
