import Typography from '@material-ui/core/Typography';
import { IngredientList } from 'components/IngredientList/IngredientList';
import { MeasureUnitSelect } from 'components/MeasureUnitSelect/MeasureUnitSelect';
import { useTranslation } from 'next-i18next';
import React from 'react';
import styled from 'styled-components';
import { PageContainer } from '../page.style';
import { RecipeDetails } from './types';
import { MeasureUnit } from 'components/pages/Recipe/types';

const RecipeContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const IngredientsListContainer = styled.div`
  flex: 1 1 auto;
  padding: 1rem;
`;

const IngredientsHeader = styled.div`
  display: flex;
  dlex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

type RecipePageProps = {
  recipe: RecipeDetails;
};

export const RecipePage: React.FunctionComponent<RecipePageProps> = ({
  recipe,
}) => {
  const { t } = useTranslation();
  const [measureUnit, setMeasureUnit] = React.useState<MeasureUnit>(
    MeasureUnit.GRAMS
  );

  return (
    <PageContainer>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={recipe.photoTitlePath}
        alt={`honey-cinnamon-recipe-${recipe.id}`}
      />
      <RecipeContainer>
        <IngredientsListContainer>
          <IngredientsHeader>
            <Typography variant="h5">
              {t('recipe.ingredients-title')}
            </Typography>
            <MeasureUnitSelect
              measureUnit={measureUnit}
              setMeasureUnit={setMeasureUnit}
            />
          </IngredientsHeader>
          {recipe.parts.map((part) => (
            <IngredientList
              key={part.title}
              title={part.title}
              measureUnit={measureUnit}
              ingredients={part.ingredients}
            />
          ))}
        </IngredientsListContainer>
      </RecipeContainer>
    </PageContainer>
  );
};
