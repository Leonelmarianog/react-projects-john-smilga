import React, { useEffect, useState, createContext } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSidebarMounted, setIsSidebarMounted] = useState(false);
  const [isSubmenuMounted, setIsSubmenuMounted] = useState(false);
  const [submenuTargetCenterCoord, setSubmenuTargetCenterCoord] = useState(0);
  const [windowWidth, setWindowWidth] = useState(document.documentElement.clientWidth);
  const [currentTab, setCurrentTab] = useState(null);

  const handleResize = () => {
    setWindowWidth(document.documentElement.clientWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  });

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        setIsSidebarOpen,
        isSidebarMounted,
        setIsSidebarMounted,
        isSubmenuMounted,
        setIsSubmenuMounted,
        submenuTargetCenterCoord,
        setSubmenuTargetCenterCoord,
        windowWidth,
        setWindowWidth,
        currentTab,
        setCurrentTab,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
