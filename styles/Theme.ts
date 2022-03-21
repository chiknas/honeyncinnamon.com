import { createTheme } from '@material-ui/core';

export const Theme = createTheme({
  typography: {
    fontFamily: 'Archer',
    fontSize: 13,
  },
  palette: {
    background: {
      paper: '#F0F0F0',
      default: 'white',
    },
    primary: {
      main: '#484f4f',
      contrastText: '#ffffff',
      dark: '#6A462F',
    },
    secondary: {
      main: '#fefbd8',
    },
  },
});
