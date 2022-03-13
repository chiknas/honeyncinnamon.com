import { Box, Typography } from '@material-ui/core';
import { Ingredient, MeasureUnit } from 'components/pages/Recipe/types';
import { useMeasurementsConverter } from 'hooks/useMeasurementsConverter';
import { useTranslation } from 'next-i18next';
import React, { useMemo } from 'react';
import styled from 'styled-components';

const StyledTypography = styled(Typography)`
  font-weight: 360;
`;

interface IngredientDescriptionProps {
  ingredient: Ingredient;
  measureUnit: MeasureUnit;
}

export const IngredientDescription: React.FunctionComponent<IngredientDescriptionProps> =
  ({ ingredient, measureUnit }) => {
    const { t } = useTranslation();
    const { convertQuantity } = useMeasurementsConverter();

    const ingredientQuantity = useMemo(
      () =>
        ingredient.quantity &&
        convertQuantity(ingredient.quantity, measureUnit),
      [convertQuantity, ingredient.quantity, measureUnit]
    );
    return (
      <>
        {ingredientQuantity?.amount && (
          <StyledTypography>
            <Box sx={{ fontWeight: 'bold' }}>{ingredientQuantity.amount}</Box>
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
      </>
    );
  };
