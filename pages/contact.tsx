import { ContactUs } from 'components/pages/ContactUs/ContactUs';
import { GetStaticProps } from 'next';
import { withTranslateProps } from 'services/StaticPropsHelpers';

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: await withTranslateProps(context),
  };
};

export default ContactUs;
