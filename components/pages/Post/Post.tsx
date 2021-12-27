import React from 'react';
import { CommentBox } from 'components/CommentBox/CommentBox';
import styled from 'styled-components';

type PostProps = {
  data: string;
};

const PostContainer = styled.div`
  padding: 3em;
`;

export const Post: React.FunctionComponent<PostProps> = ({ data }) => {
  return (
    <>
      <PostContainer dangerouslySetInnerHTML={{ __html: data }} />
      <CommentBox
        comment={{
          user: { firstName: 'FirstName', lastName: 'LastName' },
          body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        }}
      />
    </>
  );
};
