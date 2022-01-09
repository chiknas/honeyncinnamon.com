import React from 'react';
import { Divider } from '@material-ui/core';
import { CommentEntityType } from 'services/EntityServices/CommentService/types';
import { PageContainer } from '../page.style';
import dynamic from 'next/dynamic';

type PostProps = {
  id: string;
  data: string;
};

export const PostPage: React.FunctionComponent<PostProps> = ({ id, data }) => {
  // the user wont have to see this asap. lazy load to improve performance.
  const CommentSection = dynamic(
    () => import('components/Comment/CommentSection/CommentSection')
  );
  return (
    <PageContainer>
      <div dangerouslySetInnerHTML={{ __html: data }} />
      <Divider />
      <CommentSection id={id} entityType={CommentEntityType.POSTS} />
    </PageContainer>
  );
};
