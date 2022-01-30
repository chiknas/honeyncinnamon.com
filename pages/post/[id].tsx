import { GetStaticPaths, GetStaticProps } from 'next';
import fs from 'fs';
import path from 'path';
import { ParsedUrlQuery } from 'querystring';
import { withTranslateProps } from 'services/StaticPropsHelpers';
import { PostPage } from 'components/pages/Post/PostPage';
import { Converter } from 'showdown';

const mdConverter = new Converter();

interface Params extends ParsedUrlQuery {
  id: string;
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params as Params;
  // get all the files in different translations for this post
  const translatedPosts = fs.readdirSync(path.join('posts', id));
  // pick the correct file based on the locale used
  const translatedPostFile =
    translatedPosts.find((post) => post.includes(context.locale ?? 'en')) ??
    translatedPosts[0];
  // convert md to html
  const data = mdConverter.makeHtml(
    fs.readFileSync(path.join('posts', id, translatedPostFile), 'utf-8')
  );

  return {
    props: await withTranslateProps(context, { id, data }),
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = fs
    .readdirSync(path.join('posts'))
    .filter((postPath) =>
      fs.statSync(path.join('posts', postPath)).isDirectory()
    );

  const paths = posts.flatMap((post) => {
    // find all the languages the post is available
    const recipeLanguages = fs.readdirSync(path.join('posts', post));

    // map each language to a new path
    return recipeLanguages.map((variant) => {
      const locale = variant.replace('.md', '').split('-')[1];
      return {
        params: {
          id: post,
        },
        locale,
      };
    });
  });

  return {
    paths,
    fallback: false,
  };
};

export default PostPage;
