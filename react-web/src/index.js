import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { orange, deepOrange } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: orange,
    secondary: deepOrange
  }
});

render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById('root')
);
