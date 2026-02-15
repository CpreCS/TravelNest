import { useState, useEffect } from 'react';

export function usePopularPicks(initialCountries, allUnpicked) {
  const [displayedCountries, setDisplayedCountries] = useState(initialCountries);

  useEffect(() => {
    setDisplayedCountries(initialCountries);
  }, [initialCountries]);

  function replaceCountry(countryCode) {
    const available = allUnpicked.filter(c => !displayedCountries.some(d => d.cca2 === c.cca2));
    if (available.length === 0) return;
    
    const randomCountry = available[Math.floor(Math.random() * available.length)];
    const newCountries = displayedCountries.map(c => {
      if (c.cca2 === countryCode) {
        return randomCountry;
      }
      return c;
    });
    setDisplayedCountries(newCountries);
  }

  return { displayedCountries, replaceCountry };
}
