import React, { useMemo } from 'react';
import { PageContainer } from '../page.style';
import { Gallery } from 'components/Gallery/Gallery';
import { RecipeDetails } from '../Recipe/types';
import { useRouter } from 'next/dist/client/router';
import { routes } from 'services/routes';
import { groupBy } from 'utils/helperFunctions';
import { useTranslation } from 'next-i18next';

interface RecipesProps {
  recipes: RecipeDetails[];
}

const Recipes: React.FunctionComponent<RecipesProps> = ({ recipes }) => {
  const { t } = useTranslation();
  const router = useRouter();
  const galleryData = useMemo(
    () =>
      // group recipes by meal type
      Object.values(groupBy(recipes, (i) => i.metadata.mealType))
        .filter((group) => group.length !== 0)
        .map((group) => ({
          title: t(
            `recipe-details.metadata.meal-type.${group[0].metadata.mealType}`
          ),
          items: group.map((item) => ({
            title: item.title,
            img: item.photoTitlePath,
            onClick: () => router.push(routes.recipe(item.id)),
          })),
        })),
    [recipes, router, t]
  );
  return (
    <PageContainer>
      <Gallery data={galleryData} />
    </PageContainer>
  );
};

export default Recipes;
