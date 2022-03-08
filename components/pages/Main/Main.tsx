import { Carousel } from 'components/Carousel/Carousel';
import { carouselMockData } from 'components/Carousel/mockData';
import { Logo } from 'components/Logo/Logo';
import Head from 'next/head';
import { PageContainer } from '../page.style';
import styles from './Main.module.css';

export const Main: React.FunctionComponent = () => {
  return (
    <PageContainer>
      <Logo />
      <Carousel title="Recent recipes" data={carouselMockData} />
    </PageContainer>
  );
};
