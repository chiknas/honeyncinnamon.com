import { Grow, Popper } from '@material-ui/core';
import { useRouter } from 'next/dist/client/router';
import React, { useCallback, useEffect, useRef } from 'react';
import styled from 'styled-components';

const WrappedComponentContainer = styled.div`
  display: flex;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;

/**
 * IMPORTANT: Memoize the result to avoid unwanted re-renders.
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
    const ref = useRef(null);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const { events } = useRouter();
    const open = Boolean(anchorEl);

    const handleClick = (event: any) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    const handleClickOutside = useCallback((event: MouseEvent) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      if (ref.current && !ref.current.contains(event.target)) {
        handleClose();
      }
    }, []);

    useEffect(() => {
      document.addEventListener('click', handleClickOutside, true);
      return () => {
        document.removeEventListener('click', handleClickOutside, true);
      };
    }, [handleClickOutside]);

    // the page is about to change and the poper is up close it.
    useEffect(() => {
      events.on('routeChangeStart', () => handleClose());
    }, [events]);

    return (
      <>
        <WrappedComponentContainer onClick={handleClick}>
          {wrappedComponent}
        </WrappedComponentContainer>
        <Popper
          style={{ zIndex: 9999 }}
          ref={ref}
          anchorEl={anchorEl}
          open={open}
          transition
        >
          {({ TransitionProps }) => (
            <Grow {...TransitionProps} timeout={250}>
              {children}
            </Grow>
          )}
        </Popper>
      </>
    );
  };
  return PoperPanel;
};
