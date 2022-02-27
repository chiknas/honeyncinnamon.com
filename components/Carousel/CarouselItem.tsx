import { Collapse, Typography } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import { CarouselItemData } from './types';

const CarouselImage = styled.img`
  border-radius: 15px;
`;

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.3rem;
  border-radius: 15px;
  &:hover {
    cursor: pointer;
  }
`;

export interface CarouselItemProps extends CarouselItemData {
  visible: boolean;
}

export const CarouselItem: React.FunctionComponent<CarouselItemProps> = ({
  img,
  title,
  visible,
  onClick,
}) => {
  return (
    <Collapse in={visible} timeout={1000}>
      <ItemContainer onClick={onClick}>
        <CarouselImage src={img} />
        <Typography variant="h6">{title}</Typography>
      </ItemContainer>
    </Collapse>
  );
};
