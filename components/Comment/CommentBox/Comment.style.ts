import { Typography } from '@material-ui/core';
import styled from 'styled-components';
import { Theme } from 'styles/Theme';

export const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const CommentTitle = styled(Typography)`
  font-size: 1em;
  font-weight: 390;
  padding-top: 0.5rem;
`;

export const CommentBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  background-color: ${Theme.palette.background.paper};
  border-radius: 8px;
  padding: 1rem;
`;

export const CommentBoxActionContainer = styled.div<{ visible?: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 0.5rem;
  visibility: ${(props) => (props.visible ? 'visible' : 'hidden')};
  opacity: ${(props) => (props.visible ? '1' : '0')};
  transition: opacity 0.3s linear;
  * + * {
    flex: 0 1 auto;
  }
`;
