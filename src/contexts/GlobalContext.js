import { useState, createContext } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <AppContext.Provider value={{ isDropdownOpen, setIsDropdownOpen }}>
      {children}
    </AppContext.Provider>
  );
};
