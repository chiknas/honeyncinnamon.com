import { Register } from 'components/pages/Register/Register';
import { GetStaticProps } from 'next';
import { withTranslateProps } from 'services/StaticPropsHelpers';

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: await withTranslateProps(context),
  };
};

export default Register;
