import { GetStaticProps } from 'next';
import { withTranslateProps } from 'services/StaticPropsHelpers';
import Recipes from 'components/pages/Recipes/Recipes';
import fs from 'fs';
import path from 'path';
import { RecipeDetails } from 'components/pages/Recipe/types';

export const getStaticProps: GetStaticProps = async (context) => {
  // get all the files in different translations for this recipe
  const recipes = fs
    .readdirSync('recipes')
    // filter out any files from the root folder
    .filter(
      (fileName) => !fileName.includes('.') && !fileName.includes('__tests__')
    )
    // go through each recipe folder
    .flatMap((recipeFolder) => {
      // find the correct json based on the locale
      const recipeJsonFile = fs
        .readdirSync(path.join('recipes', recipeFolder))
        .find((translatedRecipe) =>
          translatedRecipe.includes(context.locale ?? 'en')
        );
      // create recipe relative path to the json file
      const recipeJsonPath = recipeJsonFile
        ? path.join('recipes', recipeFolder, recipeJsonFile)
        : undefined;
      // parse the json file into a json object
      const recipeJson = recipeJsonPath
        ? JSON.parse(fs.readFileSync(recipeJsonPath, 'utf-8'))
        : undefined;
      return recipeJson
        ? ({ ...recipeJson, id: recipeFolder } as RecipeDetails)
        : '';
    })
    // filter out recipes we did not find
    .filter((recipe) => recipe !== '');

  return {
    props: await withTranslateProps(context, { recipes }),
  };
};

export default Recipes;
