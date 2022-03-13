import { Gallery } from 'components/Gallery/Gallery';
import { useRouter } from 'next/dist/client/router';
import React, { useMemo } from 'react';
import { routes } from 'services/routes';
import { PageContainer } from '../page.style';
import { PostDetails } from '../Post/type';

interface PostDetailsWithId extends PostDetails {
  // the post id is the folder name
  id: string;
}

interface PostsProps {
  postsDetails: PostDetailsWithId[];
}

export const Posts: React.FunctionComponent<PostsProps> = ({
  postsDetails,
}) => {
  const router = useRouter();
  const postsGalleryData = useMemo(
    () => [
      {
        items: postsDetails.map((post) => ({
          title: post.title,
          img: post.img,
          onClick: () => router.push(routes.post(post.id)),
        })),
      },
    ],
    [postsDetails, router]
  );
  return (
    <PageContainer>
      <Gallery data={postsGalleryData} />
    </PageContainer>
  );
};
