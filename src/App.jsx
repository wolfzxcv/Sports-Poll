import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import WholePage from './components/WholePage/WholePage';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <WholePage />
    </ThemeProvider>
  );
};

export default App;
