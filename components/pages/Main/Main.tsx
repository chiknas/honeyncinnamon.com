import { Carousel } from 'components/Carousel/Carousel';
import { carouselMockData } from 'components/Carousel/mockData';
import { Logo } from 'components/Logo/Logo';
import { PageContainer } from '../page.style';

export const Main: React.FunctionComponent = () => {
  return (
    <PageContainer>
      <Logo />
      <Carousel title="Recent recipes" data={carouselMockData} />
    </PageContainer>
  );
};
