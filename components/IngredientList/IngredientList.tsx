import {
  Box,
  Checkbox,
  Typography,
  Divider,
  IconButton,
  Collapse,
} from '@material-ui/core';
import { Ingredient } from 'components/pages/Recipe/types';
import { useTranslation } from 'next-i18next';
import React, { useMemo, useState } from 'react';
import styled from 'styled-components';
import { BiPlus, BiMinus } from 'react-icons/bi';

const IngredientListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const IngredientLineContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.2rem;
`;

const StyledTypography = styled(Typography)`
  font-weight: 360;
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid black;
`;

interface IngredientListProps {
  title: string;
  ingredients: Ingredient[];
}

export const IngredientList: React.FunctionComponent<IngredientListProps> = ({
  title,
  ingredients,
}) => {
  const { t } = useTranslation();
  const [expand, setExpand] = useState(true);

  const lines = useMemo(
    () =>
      ingredients.map((ingredient, index) => (
        <React.Fragment
          key={`ingredient-line-${ingredient.description}-${index}`}
        >
          <Divider />
          <IngredientLineContainer>
            <Checkbox />
            {ingredient.quantity?.amount && (
              <StyledTypography>
                <Box sx={{ fontWeight: 'bold' }}>
                  {ingredient.quantity?.amount}
                </Box>
              </StyledTypography>
            )}
            {ingredient.quantity?.unit && (
              <StyledTypography>
                <Box sx={{ fontWeight: 'bold' }}>
                  {t(`measurement-units.${ingredient.quantity?.unit}`)}
                </Box>
              </StyledTypography>
            )}
            <StyledTypography>{ingredient.description}</StyledTypography>
          </IngredientLineContainer>
        </React.Fragment>
      )),
    [ingredients, t]
  );
  return (
    <IngredientListContainer>
      <HeaderContainer>
        <Typography>{title}</Typography>
        <IconButton onClick={() => setExpand((currentState) => !currentState)}>
          {expand ? <BiMinus /> : <BiPlus />}
        </IconButton>
      </HeaderContainer>
      <Collapse in={expand} unmountOnExit={true} timeout={800}>
        <div>{lines}</div>
      </Collapse>
    </IngredientListContainer>
  );
};
