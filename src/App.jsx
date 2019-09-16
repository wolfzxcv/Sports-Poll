import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import AppContextProvider from './context/AppContext';
import WholePage from './components/WholePage/WholePage';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppContextProvider>
        <WholePage />
      </AppContextProvider>
    </ThemeProvider>
  );
};

export default App;
