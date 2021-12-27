import { Popper, ClickAwayListener } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';

const WrappedComponentContainer = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

/**
 * It wraps the passed in component to a poper component. The new component will look
 * exactly the same but it will be clickable and all its children will be rendered underneath
 * when clicked.
 * @param wrappedComponent the component to make a poper
 * @returns the specified comp wrapped in a poper
 */
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
