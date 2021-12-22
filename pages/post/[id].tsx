import { GetStaticPaths, GetStaticProps } from 'next';
import fs from 'fs';
import path from 'path';
import { ParsedUrlQuery } from 'querystring';
import { withTranslateProps } from 'services/StaticPropsHelpers';
import { Post } from 'components/pages/Post/Post';

interface Params extends ParsedUrlQuery {
  id: string;
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params as Params;
  const data = fs.readFileSync(
    path.join('posts', `${id}-${context.locale}.md`),
    'utf-8'
  );

  return {
    props: await withTranslateProps(context, { data }),
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = fs.readdirSync(path.join('posts'));
  const paths = posts.flatMap((post) => {
    const [id, locale] = post.replace('.md', '').split('-');
    return {
      params: {
        id,
      },
      locale,
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export default Post;
