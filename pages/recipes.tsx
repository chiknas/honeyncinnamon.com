import { GetStaticProps } from 'next';
import { withTranslateProps } from 'services/StaticPropsHelpers';
import Recipes from 'components/pages/Recipes/Recipes';

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: await withTranslateProps(context),
  };
};

export default Recipes;
