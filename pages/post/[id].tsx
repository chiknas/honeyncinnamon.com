import React, { useEffect, useState } from 'react';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { marked } from 'marked';
import fs from 'fs';
import path from 'path';
import { ParsedUrlQuery } from 'querystring';
import { withTranslateProps } from 'services/StaticPropsHelpers';

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

const Post: React.FunctionComponent = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [renderPost, setRenderPost] = useState<string | undefined>(undefined);
  useEffect(() => {
    const markedPost = marked(data);
    setRenderPost(markedPost);
  }, [data]);
  return (
    <>
      {renderPost && <div dangerouslySetInnerHTML={{ __html: renderPost }} />}
    </>
  );
};

export default Post;
