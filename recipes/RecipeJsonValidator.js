var Ajv = require('ajv');
var schema = require('./recipe-schema.json');
var fs = require('fs');
var path = require('path');

const ajv = new Ajv({ allErrors: true }); // options can be passed, e.g. {allErrors: true}
ajv.addKeyword('defaultSnippets');

// go through the recipes folder and find all the recipes paths
const AllRecipes = [];
function ThroughDirectory(Directory) {
  fs.readdirSync(Directory).forEach((File) => {
    const Absolute = path.join(Directory, File);
    if (fs.statSync(Absolute).isDirectory()) return ThroughDirectory(Absolute);
    else return Directory !== 'recipes' && AllRecipes.push(Absolute);
  });
}
ThroughDirectory('recipes');

// go through and validate each JSON. if there is an error push it in the error array
const errors = [];
AllRecipes.forEach((file) => {
  const recipeJsonContent = fs.readFileSync(file, 'utf-8');
  const valid = ajv.validate(schema, JSON.parse(recipeJsonContent));

  if (!valid) {
    errors.push({
      fileName: file,
      message: JSON.stringify(ajv.errors),
    });
  }
});

// print errors and exit 1
if (errors.length > 0) {
  console.error(errors);
  process.exitCode = 1;
  return 1;
}
process.exitCode = 0;
return 0;
