import React, { useState, createContext } from 'react';
import itemsData from '../data';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [items, setItems] = useState(itemsData);

  return <AppContext.Provider value={{ items, setItems }}>{children}</AppContext.Provider>;
};

export { AppContext, AppProvider };
