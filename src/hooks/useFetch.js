import { useReducer, useEffect } from 'react';
import { fetchReducer } from '../reducers';

const initialState = { data: null, loading: true, error: { status: false, message: null } };

const useFetch = (fetcher, url) => {
  const [state, dispatch] = useReducer(fetchReducer, initialState);

  useEffect(() => {
    const getData = async (url) => {
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

    getData(url);
  }, [fetcher, url]);

  return state;
};

export default useFetch;
