import { Checkbox } from '@material-ui/core';
import { Ingredient, MeasureUnit } from 'components/pages/Recipe/types';
import React, { useMemo } from 'react';
import styled from 'styled-components';
import { IngredientDescription } from './IngredientDescription';

const IngredientLineContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.2rem;
`;

const IngredientTextContainer = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.2rem;
  color: blue;
  &:hover {
    color: DodgerBlue;
    cursor: pointer;
  }
`;

const withLink = (
  component: JSX.Element,
  href?: string
): React.FunctionComponent => {
  const LinkText = () => {
    return (
      <>
        {href ? (
          <IngredientTextContainer target="_blank" href={href}>
            {component}
          </IngredientTextContainer>
        ) : (
          component
        )}
      </>
    );
  };
  return LinkText;
};

interface IngredientLineProps {
  ingredient: Ingredient;
  measureUnit: MeasureUnit;
}

export const IngredientLine: React.FunctionComponent<IngredientLineProps> = ({
  ingredient,
  measureUnit,
}) => {
  // converts the ingredient description to a link if we have one
  const LinkText = useMemo(
    () =>
      withLink(
        <IngredientDescription
          ingredient={ingredient}
          measureUnit={measureUnit}
        />,
        ingredient.url
      ),
    [ingredient, measureUnit]
  );

  return (
    <IngredientLineContainer>
      <Checkbox />
      <LinkText />
    </IngredientLineContainer>
  );
};
