import React, { useState, createContext } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSidebarMounted, setIsSidebarMounted] = useState(false);

  return (
    <AppContext.Provider
      value={{ isSidebarOpen, setIsSidebarOpen, isSidebarMounted, setIsSidebarMounted }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
