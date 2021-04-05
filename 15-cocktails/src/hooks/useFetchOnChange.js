import { useEffect, useReducer } from 'react';
import { cocktailsAPI } from '../api/api';
import { fromApiToEntity } from '../mappers/mappers';
import { fetchReducer } from '../reducers';

const initialState = {
  data: null,
  loading: false,
  error: null,
};

export const useFetchOnChange = (searchTerm, timeout) => {
  const [state, dispatch] = useReducer(fetchReducer, initialState);

  useEffect(() => {
    const timerId = setTimeout(async () => {
      if (searchTerm) {
        dispatch({ type: 'LOAD' });

        try {
          const { drinks: cocktailsData } = await cocktailsAPI.getByName(
            searchTerm
          );

          if (!cocktailsData) {
            throw new Error('No Results');
          }

          const cocktails = cocktailsData.map((cocktailData) =>
            fromApiToEntity(cocktailData)
          );

          dispatch({ type: 'SUCCESS', payload: cocktails });
        } catch (error) {
          dispatch({ type: 'ERROR', payload: error.message });
        }
      } else {
        dispatch({ type: 'CLEAN' });
      }
    }, timeout);

    return () => clearTimeout(timerId);
  }, [searchTerm]);

  return state;
};
