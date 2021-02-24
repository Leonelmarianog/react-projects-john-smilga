import React, { createContext, useReducer, useEffect } from 'react';
import getResource from '../api/api';
import { bagReducer } from '../reducers';

const URL = 'https://course-api.com/react-useReducer-cart-project';

const AppContext = createContext();

const initialState = {
  loading: true,
  error: { status: false, message: null },
  data: null,
  amount: 0,
  total: 0,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(bagReducer, initialState);

  useEffect(() => {
    const getData = async (fetcher, url) => {
      dispatch({ type: 'LOAD' });

      try {
        const data = await fetcher(url);

        if (!data.length > 0) {
          throw new Error('No items in bag');
        }

        dispatch({ type: 'SUCCESS', payload: data });
      } catch (error) {
        dispatch({ type: 'ERROR', payload: error.message });
      }
    };

    getData(getResource, URL);
  }, []);

  return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>;
};

export { AppContext, AppProvider };
