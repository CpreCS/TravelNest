import { useEffect, useState } from 'react';
import { fetchCountries } from '../services/countriesApi';
import { sortByCountryName } from '../utils/countries';

export const useCountries = (region = null) => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function loadCountries() {
    setLoading(true);
    setError(null);

    try {
      const data = await fetchCountries(region);
      const sorted = sortByCountryName(data);
      setCountries(sorted);
    } catch (err) {
      setError(err.message);
      setLoading(false);
      return;
    }
    
    setLoading(false);
  }

  useEffect(() => {
    loadCountries();
  }, [region]);

  return {
    countries,
    loading,
    error,
    refetch: loadCountries,
  };
};
