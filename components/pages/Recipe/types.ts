/**
 * This object should match the recipe JSON files set in the recipes folder.
 * The id property is set by the recipe folder so is the only prop that should not match the json files.
 */
export interface RecipeDetails {
  id: string;
  title: string;
  metadata: Metadata;
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
  LITRES = 'litres',
  MILLI_LITRES = 'ml',
  NONE = '',
}

export enum MealType {
  BREAKFAST = 'breakfast',
  BRUNCH = 'branch',
  LUNCH = 'lunch',
  SUPPER = 'supper',
  DINNER = 'dinner',
}

export interface Quantity {
  amount: number;
  unit: MeasureUnit;
}

export interface Ingredient {
  description: string;
  quantity?: Quantity;
  url?: string;
}

export interface Metadata {
  mealType: MealType;
}
