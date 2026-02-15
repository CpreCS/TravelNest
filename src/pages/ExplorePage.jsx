import { useCountries } from '../hooks/useCountries';
import { useState } from 'react';
import { filterCountries } from '../utils/countries';
import Searchbar from '../components/Searchbar';
import CountryCard from '../components/CountryCard';
import CountryCardSkeleton from '../components/CountryCardSkeleton';
import { usePicks } from '../hooks/usePicks';
 

export default function ExplorePage(){
  const { countries, loading, error } = useCountries();
  const [term, setTerm] = useState('');
  const [region, setRegion] = useState('All');
  const { picks, isPicked, togglePick } = usePicks('picks');
  
  const filteredCountries = countries ? filterCountries(countries, term, region) : [];

  if (loading) return (
    <main className="px-6 sm:px-8">
      <h1 className="text-gray-800 text-3xl font-semibold pt-15 pb-4 text-center">Your Next Adventure Starts Here!</h1>
        <h2 className='text-gray-800 text-xl text-center'>Explore amazing countries around the world you would love to visit and add them to your picks.</h2>
        <Searchbar />
      <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mb-10'>
        {Array.from({ length: 6 }).map((_, i) => (
          <CountryCardSkeleton key={i} />
        ))}
      </div>
    </main>
  );

  if (error) return <p>{error}</p>;
  
  return(
    <main className="px-6 sm:px-8">
      <h1 className="text-gray-800 text-3xl font-semibold pt-15 pb-4 text-center">Your Next Adventure Starts Here!</h1>
      <h2 className='text-gray-800 text-xl text-center'>Explore amazing countries around the world you would love to visit and add them to your picks.</h2>

      <Searchbar
        searchText={term}
        onSearchChange={setTerm}
        selectedRegion={region}
        onRegionChange={setRegion}
      />


      <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mb-10'>
          {filteredCountries.map((country) => (
            <CountryCard 
              key={country.cca2}
              country={country}
              isPicked={isPicked}
              togglePick={togglePick}
            />
          ))}
      </div>
    </main>
  );
}
  
