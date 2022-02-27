import { IconButton, Typography } from '@material-ui/core';
import React, { useCallback, useMemo, useState, useEffect } from 'react';
import styled from 'styled-components';
import { CarouselState } from './types';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';
import { CarouselItem } from './CarouselItem';
import { CarouselItemData } from './types';
import { Theme } from 'styles/Theme';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
`;

const HeaderContainer = styled.div`
  padding: 1rem;
  border: 2px solid ${Theme.palette.background.paper};
  border-bottom: none;
  border-radius: 15px 15px 0 0;
`;

const CarouselContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${Theme.palette.background.paper};
  padding: 1rem 0.5rem 1rem 0.5rem;
  gap: 0.5rem;
  border-radius: 0 0 15px 15px;
  box-shadow: rgba(50, 50, 93, 0.05) 0px 30px 60px -12px inset,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
`;

const CarouselLineContainer = styled.div<{
  visibleItems: number;
}>`
  display: grid;
  grid-template-columns: repeat(${(p) => p.visibleItems}, auto);
  grid-template-rows: min-content;
  column-gap: 0.5rem;
`;

const StyledIconButton = styled(IconButton)`
  &:hover {
    color: ${Theme.palette.primary.main};
  }
`;

interface CarouselProps {
  title: string;
  data: CarouselItemData[];
  pageSize?: number;
  autoScroll?: boolean;
  autoScrollInterval?: number;
}

export const Carousel: React.FunctionComponent<CarouselProps> = ({
  data,
  title,
  pageSize = 4,
  autoScroll = false,
  autoScrollInterval = 5000,
}) => {
  const [carouselState, setCarouselState] = useState<CarouselState>({
    page: 0,
    pageSize,
    totalPages: Math.ceil(data.length / pageSize),
  });

  // update carousel state on prop change
  useEffect(
    () =>
      setCarouselState({
        page: 0,
        pageSize,
        totalPages: Math.ceil(data.length / pageSize),
      }),
    [data.length, pageSize]
  );

  const items = useMemo(() => {
    const pageIndex = carouselState.page * carouselState.pageSize;
    return data.map((item, index) => {
      const isItemInCurrentPage =
        pageIndex <= index && index < pageIndex + carouselState.pageSize;
      return (
        <CarouselItem {...item} visible={isItemInCurrentPage} key={index} />
      );
    });
  }, [carouselState.page, carouselState.pageSize, data]);

  // move the carousel forward or backwards
  // positive numbers: forward
  // negative numbers: backward
  const carouselChangePage = useCallback(
    (next: number) => {
      const nextPage = carouselState.page + next;
      const page = nextPage % carouselState.totalPages;
      setCarouselState((currentState) => ({
        ...currentState,
        // if we exceed the page limits wrap around to the first/last element
        page: page < 0 ? carouselState.totalPages - 1 : page,
      }));
    },
    [carouselState.page, carouselState.totalPages]
  );

  // auto scroll to the next page
  useEffect(() => {
    const autoScrollTimeout =
      autoScroll && setTimeout(() => carouselChangePage(1), autoScrollInterval);
    return () => {
      autoScrollTimeout && clearTimeout(autoScrollTimeout);
    };
  }, [autoScroll, autoScrollInterval, carouselChangePage]);

  return (
    <Container>
      <HeaderContainer>
        <Typography variant="h5">{title}</Typography>
      </HeaderContainer>
      <CarouselContainer>
        <StyledIconButton onClick={() => carouselChangePage(-1)}>
          <FaArrowAltCircleLeft />
        </StyledIconButton>
        <CarouselLineContainer visibleItems={carouselState.pageSize}>
          {items}
        </CarouselLineContainer>
        <StyledIconButton onClick={() => carouselChangePage(1)}>
          <FaArrowAltCircleRight />
        </StyledIconButton>
      </CarouselContainer>
    </Container>
  );
};
