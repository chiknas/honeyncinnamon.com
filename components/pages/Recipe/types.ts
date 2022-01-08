/**
 * This object should match the recipe JSON files set in the recipes folder.
 * The id property is set by the recipe folder so is the only prop that should not match the json files.
 */
export interface RecipeDetails {
  id: string;
  photoTitlePath: string;
}
