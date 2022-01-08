import React from 'react';
import { PageContainer } from '../page.style';
import { RecipeDetails } from './types';

type RecipePageProps = {
  recipe: RecipeDetails;
};

export const RecipePage: React.FunctionComponent<RecipePageProps> = ({
  recipe,
}) => {
  return (
    <PageContainer>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={recipe.photoTitlePath}
        alt={`honey-cinnamon-recipe-${recipe.id}`}
      />
    </PageContainer>
  );
};
