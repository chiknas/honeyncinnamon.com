import { Divider } from '@material-ui/core';
import { Ingredient, MeasureUnit } from 'components/pages/Recipe/types';
import React, { useMemo } from 'react';
import { CollapsableCard } from 'components/CollapsableCard/CollapsableCard';
import { IngredientLine } from './IngredientLine';

interface IngredientListProps {
  title: string;
  measureUnit: MeasureUnit;
  ingredients: Ingredient[];
}

export const IngredientList: React.FunctionComponent<IngredientListProps> = ({
  title,
  measureUnit,
  ingredients,
}) => {
  const lines = useMemo(
    () =>
      ingredients.map((ingredient, index) => (
        <React.Fragment
          key={`ingredient-line-${ingredient.description}-${index}`}
        >
          <Divider />
          <IngredientLine ingredient={ingredient} measureUnit={measureUnit} />
        </React.Fragment>
      )),
    [ingredients, measureUnit]
  );
  return <CollapsableCard title={title}>{lines}</CollapsableCard>;
};
