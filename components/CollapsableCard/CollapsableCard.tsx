import { Typography, IconButton, Collapse } from '@material-ui/core';
import React, { PropsWithChildren, useState } from 'react';
import styled from 'styled-components';
import { BiPlus, BiMinus } from 'react-icons/bi';
import { Theme } from 'styles/Theme';

const CardContainer = styled.div<{ folder?: boolean }>`
  display: flex;
  flex-direction: column;
  ${(props) => props.folder && 'margin-top: 0.3rem;'}
`;

const HeaderContainer = styled.div<{ folder?: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid black;
  ${(props) =>
    props.folder && `background-color: ${Theme.palette.primary.light};`}
  ${(props) => props.folder && `color: ${Theme.palette.primary.contrastText};`}
  ${(props) => props.folder && 'border-radius: 8px 8px 0 0;'}
  ${(props) => props.folder && 'padding: 0 0.3rem 0 0.3rem;'}
`;

interface CollapsableCardProps {
  title: string;
  folder?: boolean;
}

export const CollapsableCard: React.FunctionComponent<
  PropsWithChildren<CollapsableCardProps>
> = ({ children, title, folder }) => {
  const [expand, setExpand] = useState(true);
  return (
    <CardContainer folder={folder}>
      <HeaderContainer folder={folder}>
        <Typography>{title}</Typography>
        <IconButton onClick={() => setExpand((currentState) => !currentState)}>
          {expand ? <BiMinus /> : <BiPlus />}
        </IconButton>
      </HeaderContainer>
      <Collapse in={expand} unmountOnExit={true} timeout={800}>
        {children}
      </Collapse>
    </CardContainer>
  );
};
