import { GetStaticPaths, GetStaticProps } from 'next';
import fs from 'fs';
import path from 'path';
import { ParsedUrlQuery } from 'querystring';
import { withTranslateProps } from 'services/StaticPropsHelpers';
import { RecipePage } from 'components/pages/Recipe/RecipePage';
import { RecipeDetails } from 'components/pages/Recipe/types';

interface Params extends ParsedUrlQuery {
  id: string;
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params as Params;
  // const recipesAbsolutePaths = ThroughDirectory('recipes', 'recipes', true);
  const recipeJson = {
    ...JSON.parse(
      fs.readFileSync(
        path.join('recipes', id, `${id}-${context.locale}.json`),
        'utf-8'
      )
    ),
    id,
  } as RecipeDetails;

  return {
    props: await withTranslateProps(context, { recipe: recipeJson }),
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  // find all the subfolders in the recipes folder (the subfolder name is the recipe id)
  const recipes = fs
    .readdirSync(path.join('recipes'))
    .filter((recipePath) =>
      fs.statSync(path.join('recipes', recipePath)).isDirectory()
    );

  const paths = recipes.flatMap((recipe) => {
    // find all the langiages the recipe is available
    const recipeLanguages = fs.readdirSync(path.join('recipes', recipe));

    // map each language to a new path
    return recipeLanguages.map((variant) => {
      const locale = variant.replace('.json', '').split('-')[1];
      return {
        params: {
          id: recipe,
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

export default RecipePage;
