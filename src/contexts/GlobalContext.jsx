import React, { createContext } from 'react';
import getResource from '../api/api';
import { useFetch } from '../hooks';

const URL = 'https://course-api.com/react-useReducer-cart-project';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const { data, loading, error } = useFetch(getResource, URL);

  return <AppContext.Provider value={{ data, loading, error }}>{children}</AppContext.Provider>;
};

export { AppContext, AppProvider };
