import { Logo } from 'components/Logo/Logo';
import { PageContainer } from '../page.style';
import Head from 'next/head';
import { useTranslation } from 'next-i18next';

export const Main: React.FunctionComponent = () => {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t('page-title.home')}</title>
      </Head>
      <PageContainer>
        <Logo />
      </PageContainer>
    </>
  );
};
