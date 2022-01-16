/**
 * This object should match the recipe JSON files set in the recipes folder.
 * The id property is set by the recipe folder so is the only prop that should not match the json files.
 */
export interface RecipeDetails {
  id: string;
  photoTitlePath: string;
  parts: Parts[];
}

export interface Parts {
  title: string;
  ingredients: Ingredient[];
  steps: string[];
}

export enum MeasureUnit {
  GRAMS = 'grams',
  OUNCES = 'ounces',
  TABLE_SPOON = 'tablespoon',
  NONE = '',
}

export interface Quantity {
  amount: number;
  unit: MeasureUnit;
}

export interface Ingredient {
  description: string;
  quantity?: Quantity;
}
