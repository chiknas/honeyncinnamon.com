import { createTheme } from '@material-ui/core';

export const Theme = createTheme({
  typography: {
    fontFamily: 'Archer',
    fontSize: 10,
  },
  palette: {
    background: {
      paper: '#F0F0F0',
      default: 'white',
    },
    primary: {
      main: '#CDA67A',
      dark: '#6A462F',
    },
    secondary: {
      main: '#FAE9CF',
    },
  },
});
