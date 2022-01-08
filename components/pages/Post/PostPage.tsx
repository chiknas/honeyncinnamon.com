import React from 'react';
import { CommentSection } from 'components/Comment/CommentSection/CommentSection';
import { Divider } from '@material-ui/core';
import { CommentEntityType } from 'services/EntityServices/CommentService/types';
import { PageContainer } from '../page.style';

type PostProps = {
  id: string;
  data: string;
};

export const PostPage: React.FunctionComponent<PostProps> = ({ id, data }) => {
  return (
    <PageContainer>
      <div dangerouslySetInnerHTML={{ __html: data }} />
      <Divider />
      <CommentSection id={id} entityType={CommentEntityType.POSTS} />
    </PageContainer>
  );
};
