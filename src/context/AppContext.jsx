import React, { useState, createContext } from 'react';

export const AppContext = createContext();

const AppContextProvider = props => {
  const [display, setDisplay] = useState([]);
  const [displayOdds, setDisplayOdds] = useState([]);

  const chooseNext = () => {
    console.log('chooseNext');
  };

  const value = {
    display,
    setDisplay,
    displayOdds,
    setDisplayOdds,
    chooseNext,
  };
  return <AppContext.Provider value={value} {...props} />;
};

export default AppContextProvider;
