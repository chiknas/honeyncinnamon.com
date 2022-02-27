import React, { useEffect, useState } from 'react';
import { Carousel } from 'components/Carousel/Carousel';
import { PageContainer } from '../page.style';
import { carouselMockData } from 'components/Carousel/mockData';
import styled from 'styled-components';
import useViewport from 'hooks/useViewport';

const TestContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10em;
`;

const Recipes: React.FunctionComponent = () => {
  const [pageSize, setPageSize] = useState(1);
  const { isMobile } = useViewport();
  useEffect(() => setPageSize(isMobile ? 1 : 4), [isMobile]);
  return (
    <PageContainer>
      <TestContainer>
        <Carousel title="Sweets" data={carouselMockData} pageSize={pageSize} />
        <Carousel title="Salties" data={carouselMockData} pageSize={pageSize} />
        <Carousel
          title="Blog posts"
          data={carouselMockData}
          pageSize={pageSize}
        />
      </TestContainer>
    </PageContainer>
  );
};

export default Recipes;
