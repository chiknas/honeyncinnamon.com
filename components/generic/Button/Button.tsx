import { Button as MuiButton } from '@material-ui/core';
import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { Theme } from 'styles/Theme';

export type ButtonType = 'primary' | 'secondary' | 'info' | 'default';

const StyledButton = styled(MuiButton)<{
  buttontype: ButtonType;
}>`
  color: ${(p) =>
    p.buttontype !== 'default' && Theme.palette[p.buttontype].contrastText};
  background-color: ${(p) =>
    p.buttontype !== 'default' && Theme.palette[p.buttontype].main};
  &:hover {
    background-color: ${(p) =>
      p.buttontype !== 'default' && Theme.palette[p.buttontype].dark};
    color: ${(p) =>
      p.buttontype !== 'default' && Theme.palette[p.buttontype].light};
  }
`;

type ButtonProps = React.ComponentProps<typeof MuiButton> & {
  buttontype?: ButtonType;
};

export const Button: React.FunctionComponent<PropsWithChildren<ButtonProps>> =
  ({ children, ...props }) => {
    return (
      <StyledButton buttontype="primary" {...props}>
        {children}
      </StyledButton>
    );
  };
