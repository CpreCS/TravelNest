const API_BASE_URL = 'https://restcountries.com/v3.1';

const FIELDS = 'name,flags,cca2,region,population,capital,languages';

export const fetchCountries = async (region = null) => {
  const endpoint = region
    ? `${API_BASE_URL}/region/${region}`
    : `${API_BASE_URL}/all`;

  const response = await fetch(`${endpoint}?fields=${FIELDS}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch countries (${response.status})`);
  }

  return response.json();
};
