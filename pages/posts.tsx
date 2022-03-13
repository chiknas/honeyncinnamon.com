import { Posts } from 'components/pages/Posts/Posts';
import { GetStaticProps } from 'next';
import { withTranslateProps } from 'services/StaticPropsHelpers';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export const getStaticProps: GetStaticProps = async (context) => {
  // get all the files in different translations for this recipe
  const postsDetails = fs
    .readdirSync('posts')
    // filter out any files from the root folder
    .filter((fileName) => !fileName.includes('.'))
    // go through each recipe folder
    .flatMap((postFolder) => {
      // find the correct json based on the locale
      const translatedPostFile = fs
        .readdirSync(path.join('posts', postFolder))
        .find((translatedRecipe) =>
          translatedRecipe.includes(context.locale ?? 'en')
        );
      //  read the md file content
      const postFileContent = translatedPostFile
        ? fs.readFileSync(
            path.join('posts', postFolder, translatedPostFile),
            'utf-8'
          )
        : undefined;
      // read blog post metadata
      return postFileContent
        ? { ...matter(postFileContent).data, id: postFolder }
        : undefined;
    })
    // filter out posts we did not find
    .filter((post) => post !== undefined);

  return {
    props: await withTranslateProps(context, { postsDetails }),
  };
};

export default Posts;
