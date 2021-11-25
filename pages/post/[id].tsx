import React, { useLayoutEffect, useState } from 'react';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { marked } from 'marked';
import fs from 'fs';
import path from 'path';
import { ParsedUrlQuery } from 'querystring';

interface Params extends ParsedUrlQuery {
  id: string;
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params as Params;
  const data = fs.readFileSync(path.join('posts', `${id}.md`), 'utf-8');

  return {
    props: { data },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = fs.readdirSync(path.join('posts'));
  const paths = posts.map((post) => ({
    params: { id: post.replace('.md', '') },
  }));

  return {
    paths,
    fallback: false,
  };
};

const Post: React.FunctionComponent = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [renderPost, setRenderPost] = useState<string | undefined>(undefined);
  useLayoutEffect(() => {
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
