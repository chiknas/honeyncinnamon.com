import { ThemeProvider } from '@material-ui/core';
import React from 'react';
import userEvent from '@testing-library/user-event';
import { Theme } from 'styles/Theme';
import {
  configure,
  RenderOptions,
  render as rtlRender,
} from '@testing-library/react';

const render = (
  ui: React.ReactElement,
  { ...renderOptions }: RenderOptions = {}
) => {
  const Wrapper: React.FunctionComponent = ({ children }) => {
    return <ThemeProvider theme={Theme}>{children}</ThemeProvider>;
  };
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
};

//By not doing checks to see if elements are hidden, we can perform getByRole faster
//this is important as getByRole takes the majority of testing time.
//note that this includes hidden elements in tests.
configure({ defaultHidden: true });

export * from '@testing-library/react';
export { render, userEvent };
