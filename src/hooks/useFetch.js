import { useEffect, useState } from 'react';

const useFetch = (searchTerm, fetcher, timeout) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);
    setData(null);
  });
};
