import { useEffect, useState } from 'react';

export function useSelectedCountry(pickedCountries) {
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    if (pickedCountries.length === 0) {
      setSelectedCountry(null);
      return;
    }

    if (selectedCountry) {
      const stillExists = pickedCountries.find((c) => c.cca2 === selectedCountry.cca2);
      if (stillExists) {
        return;
      }
    }
    
    setSelectedCountry(pickedCountries[0]);
  }, [pickedCountries]);

  return [selectedCountry, setSelectedCountry];
}
