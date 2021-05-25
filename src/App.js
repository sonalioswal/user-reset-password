import React from 'react';
import ResetPassword from './routes/resetPassword/ResetPassword.index';
import {GlobalStyles} from 'styles/Global'
import { ThemeProvider } from "styled-components";
import Theme from 'styles/Theme';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <ResetPassword />
    </ThemeProvider>
  );
}

export default App;
