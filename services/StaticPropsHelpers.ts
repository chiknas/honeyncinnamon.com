import { GetStaticPropsContext } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export const withTranslateProps = async (
  context: GetStaticPropsContext,
  props?: object
) => {
  return {
    ...props,
    ...(context?.locale &&
      (await serverSideTranslations(context.locale, ['common']))),
  };
};
