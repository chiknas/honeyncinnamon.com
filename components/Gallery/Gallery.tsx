import { Typography } from '@material-ui/core';
import React, { useMemo } from 'react';
import styled from 'styled-components';
import { GalleryGroupData } from './types';

const GalleryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const GalleryGroupContainer = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
`;

const GalleryGroupContentContainer = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const GalleryItem = styled.div<{ clickAble?: boolean }>`
  flex: 1 1 auto;
  max-width: 300px;
  padding: 1rem;
  opacity: 1;
  transition: 0.3s ease;
  &:hover {
    ${(p) => (p.clickAble ? 'cursor: pointer;' : '')}
    ${(p) => (p.clickAble ? 'opacity: 0.3;' : '')}
  }
`;

const GroupTitle = styled(Typography)`
  border-bottom: 1px solid black;
  padding-left: 0.3rem;
  margin-bottom: 1rem;
`;

interface GalleryProps {
  data: GalleryGroupData[];
}

export const Gallery: React.FunctionComponent<GalleryProps> = ({ data }) => {
  const items = useMemo(
    () =>
      data.map((group, index) => (
        <GalleryGroupContainer key={index}>
          <GroupTitle variant="h4">{group.title}</GroupTitle>
          <GalleryGroupContentContainer>
            {group.items.map((item, index) => (
              <GalleryItem
                key={index}
                onClick={item.onClick}
                clickAble={item.onClick !== undefined}
              >
                <img src={item.img} alt={item.title} />
                <Typography variant="h6">{item.title}</Typography>
              </GalleryItem>
            ))}
          </GalleryGroupContentContainer>
        </GalleryGroupContainer>
      )),
    [data]
  );
  return <GalleryContainer>{items}</GalleryContainer>;
};
