import Typography from '@material-ui/core/Typography';
import { IngredientList } from 'components/IngredientList/IngredientList';
import { MeasureUnitSelect } from 'components/MeasureUnitSelect/MeasureUnitSelect';
import { useTranslation } from 'next-i18next';
import React from 'react';
import styled from 'styled-components';
import { PageContainer } from '../page.style';
import { RecipeDetails } from './types';
import { MeasureUnit } from 'components/pages/Recipe/types';
import { StepsTimeline } from 'components/StepsTimeline/StepsTimeline';
import dynamic from 'next/dynamic';
import { CommentEntityType } from 'services/EntityServices/CommentService/types';
import { Divider } from '@material-ui/core';
import Head from 'next/head';

const RecipeContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: flex-start;
`;

const IngredientsListContainer = styled.div`
  flex: 1 1 30%;
  padding: 1rem;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
`;

const IngredientsHeader = styled.div`
  display: flex;
  dlex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const StepsListContainer = styled.div`
  flex: 1 1 60%;
  padding: 0.3rem;
`;

const Tip = styled(Typography)`
  margin: 1rem 0 1rem 0;
`;

type RecipePageProps = {
  recipe: RecipeDetails;
};

export const RecipePage: React.FunctionComponent<RecipePageProps> = ({
  recipe,
}) => {
  // the user wont have to see this asap. lazy load to improve performance.
  const CommentSection = dynamic(
    () => import('components/Comment/CommentSection/CommentSection')
  );

  const { t } = useTranslation();
  const [measureUnit, setMeasureUnit] = React.useState<MeasureUnit>(
    MeasureUnit.GRAMS
  );

  return (
    <>
      <Head>
        <title>{recipe.title}</title>
      </Head>
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
            {/* Introduce affiliate link tip when links are added */}
            {/* <Tip>{t('recipe.tip')}</Tip> */}
            {recipe.parts.map((part) => (
              <IngredientList
                key={`${part.title}-ingredients`}
                title={part.title}
                measureUnit={measureUnit}
                ingredients={part.ingredients}
              />
            ))}
          </IngredientsListContainer>
          <StepsListContainer>
            <Typography variant="h5">{t('recipe.steps-title')}</Typography>
            {recipe.parts.map((part) => (
              <StepsTimeline
                key={`${part.title}-steps`}
                title={part.title}
                steps={part.steps}
              />
            ))}
          </StepsListContainer>
        </RecipeContainer>
        <Divider />
        <CommentSection id={recipe.id} entityType={CommentEntityType.RECIPES} />
      </PageContainer>
    </>
  );
};
