import { GetStaticProps } from 'next';
import { withTranslateProps } from 'services/StaticPropsHelpers';
import { Main } from '../components/pages/Main/Main';

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: await withTranslateProps(context),
  };
};

export default Main;
