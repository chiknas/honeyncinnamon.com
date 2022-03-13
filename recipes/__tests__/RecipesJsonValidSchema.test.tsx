import fs from 'fs';
import path from 'path';
import * as schema from '../recipe-schema.json';
import Ajv from 'ajv';

const ajv = new Ajv({ allErrors: true }); // options can be passed, e.g. {allErrors: true}
ajv.addKeyword('defaultSnippets');

test('All the recipes have valid json schema with all the required properties', () => {
  const errors = fs
    .readdirSync('recipes')
    // filter out any files from the root folder
    .filter(
      (fileName) => !fileName.includes('.') && !fileName.includes('__tests__')
    )
    // go through each recipe folder
    .flatMap((recipeFolder) => {
      // find the correct json based on the locale
      const recipeJsonFiles = fs.readdirSync(
        path.join('recipes', recipeFolder)
      );

      return recipeJsonFiles.map((recipeJsonFile) => {
        // create recipe relative path to the json file
        const recipeJsonPath = recipeJsonFile
          ? path.join('recipes', recipeFolder, recipeJsonFile)
          : undefined;

        // parse the json file into a json object
        const recipeJson = recipeJsonPath
          ? JSON.parse(fs.readFileSync(recipeJsonPath, 'utf-8'))
          : undefined;

        const valid = ajv.validate(schema, recipeJson);
        return valid
          ? undefined
          : {
              fileName: recipeJsonFile,
              message: JSON.stringify(ajv.errors),
            };
      });
    })
    // filter valid recipes
    .filter((recipeErrors) => recipeErrors !== undefined);

  expect(errors).toEqual([]);
});
