import Typography from '@material-ui/core/Typography';
import { IngredientList } from 'components/IngredientList/IngredientList';
import { useTranslation } from 'next-i18next';
import React from 'react';
import styled from 'styled-components';
import { PageContainer } from '../page.style';
import { RecipeDetails } from './types';

const RecipeContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const IngredientsListContainer = styled.div`
  flex: 1 1 auto;
  padding: 1rem;
`;

type RecipePageProps = {
  recipe: RecipeDetails;
};

export const RecipePage: React.FunctionComponent<RecipePageProps> = ({
  recipe,
}) => {
  const { t } = useTranslation();
  return (
    <PageContainer>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={recipe.photoTitlePath}
        alt={`honey-cinnamon-recipe-${recipe.id}`}
      />
      <RecipeContainer>
        <IngredientsListContainer>
          <Typography variant="h5">{t('recipe.ingredients-title')}</Typography>
          {recipe.parts.map((part) => (
            <IngredientList
              key={part.title}
              title={part.title}
              ingredients={part.ingredients}
            />
          ))}
        </IngredientsListContainer>
      </RecipeContainer>
    </PageContainer>
  );
};
