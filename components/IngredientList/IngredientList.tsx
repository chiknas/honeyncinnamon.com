import { Box, Checkbox, Typography, Divider } from '@material-ui/core';
import { Ingredient, MeasureUnit } from 'components/pages/Recipe/types';
import { useTranslation } from 'next-i18next';
import React, { useMemo } from 'react';
import styled from 'styled-components';
import { useMeasurementsConverter } from 'hooks/useMeasurementsConverter';
import { CollapsableCard } from 'components/CollapsableCard/CollapsableCard';

const IngredientLineContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.2rem;
`;

const StyledTypography = styled(Typography)`
  font-weight: 360;
`;

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
  const { t } = useTranslation();
  const { convertQuantity } = useMeasurementsConverter();

  const lines = useMemo(
    () =>
      ingredients.map((ingredient, index) => {
        const ingredientQuantity =
          ingredient.quantity &&
          convertQuantity(ingredient.quantity, measureUnit);
        return (
          <React.Fragment
            key={`ingredient-line-${ingredient.description}-${index}`}
          >
            <Divider />
            <IngredientLineContainer>
              <Checkbox />
              {ingredientQuantity?.amount && (
                <StyledTypography>
                  <Box sx={{ fontWeight: 'bold' }}>
                    {ingredientQuantity.amount}
                  </Box>
                </StyledTypography>
              )}
              {ingredientQuantity?.unit && (
                <StyledTypography>
                  <Box sx={{ fontWeight: 'bold' }}>
                    {t(`measurement-units.${ingredientQuantity.unit}-short`)}
                  </Box>
                </StyledTypography>
              )}
              <StyledTypography>{ingredient.description}</StyledTypography>
            </IngredientLineContainer>
          </React.Fragment>
        );
      }),
    [convertQuantity, ingredients, measureUnit, t]
  );
  return <CollapsableCard title={title}>{lines}</CollapsableCard>;
};
