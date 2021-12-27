import { Popper, ClickAwayListener } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';

const WrappedComponentContainer = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

export const withPoperPanel = (
  wrappedComponent: JSX.Element
): React.FunctionComponent<any> => {
  const PoperPanel: React.FunctionComponent<any> = ({ children }) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: any) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
      <>
        <WrappedComponentContainer onClick={handleClick}>
          {wrappedComponent}
        </WrappedComponentContainer>
        <Popper anchorEl={anchorEl} open={open} transition>
          <ClickAwayListener onClickAway={handleClose}>
            <div>{children}</div>
          </ClickAwayListener>
        </Popper>
      </>
    );
  };
  return PoperPanel;
};
