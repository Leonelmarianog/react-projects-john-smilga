import { useReducer, useEffect } from 'react';

const initialState = { data: null, loading: true, error: { status: false, message: null } };

const fetchReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'LOAD':
      return { ...state, data: null, loading: true, error: { status: false, message: null } };
    case 'SUCCESS':
      return { ...state, data: payload, loading: false, error: { status: false, message: null } };
    case 'ERROR':
      return { ...state, data: null, loading: false, error: { status: true, message: payload } };
    default:
      return state;
  }
};

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
