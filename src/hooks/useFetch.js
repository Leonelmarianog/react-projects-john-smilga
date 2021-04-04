import { useEffect, useReducer } from 'react';
import { cocktailsAPI } from '../api/api';
import { fromApiToEntity } from '../mappers/mappers';
import { fetchReducer } from '../reducers';

const initialState = {
  data: null,
  loading: false,
  error: null,
};

export const useFetch = (searchTerm) => {
  const [state, dispatch] = useReducer(fetchReducer, initialState);

  useEffect(() => {
    const getData = async (searchTerm) => {
      dispatch({ type: 'LOAD' });

      try {
        const { drinks: cocktailData } = await cocktailsAPI.getById(searchTerm);

        if (!cocktailData) {
          throw new Error('No results');
        }

        const cocktail = fromApiToEntity(cocktailData[0]);

        dispatch({ type: 'SUCCESS', payload: cocktail });
      } catch (error) {
        dispatch({ type: 'ERROR', payload: error.message });
      }
    };

    getData(searchTerm);
  }, [searchTerm]);

  return state;
};
