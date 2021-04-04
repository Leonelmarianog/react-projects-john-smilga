import { useState, useEffect } from 'react';
import { cocktailsAPI } from '../api/api';
import { fromApiToEntity } from '../mappers/mappers';

export const useFetchOnChange = (searchTerm, timeout) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const timerId = setTimeout(async () => {
      if (searchTerm) {
        setLoading(true);
        setData(null);
        setError(null);

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

          setData(cocktails);
        } catch (error) {
          setError(error.message);
        }
        setLoading(false);
      } else {
        setData(null);
        setError(null);
        setLoading(false);
      }
    }, timeout);

    return () => clearTimeout(timerId);
  }, [searchTerm]);

  return { data, loading, error };
};
