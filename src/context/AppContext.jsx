import React, { useState, createContext } from 'react';

export const AppContext = createContext();

const AppContextProvider = props => {
  const [data, setData] = useState([]);

  const value = { data, setData };
  return <AppContext.Provider value={value} {...props} />;
};

export default AppContextProvider;
