import { useState, useEffect } from 'react';
import { cocktailsAPI } from '../api/api';
import { fromApiToEntity } from '../mappers/mappers';

export const useFetch = (searchTerm) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async (searchTerm) => {
      setLoading(true);
      setData(null);
      setError(null);

      try {
        const { drinks: cocktailData } = await cocktailsAPI.getById(searchTerm);

        if (!cocktailData) {
          throw new Error('No results');
        }

        const cocktail = fromApiToEntity(cocktailData[0]);

        setData(cocktail);
      } catch (error) {
        setError(error.message);
      }
      setLoading(false);
    };

    getData(searchTerm);
  }, [searchTerm]);

  return { data, loading, error };
};
