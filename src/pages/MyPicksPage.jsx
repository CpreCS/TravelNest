import MyPicks from "../assets/MyPicks.png"
import { Link } from "react-router-dom"
import { useCountries } from "../hooks/useCountries"
import { usePicks } from "../hooks/usePicks"
import { filterPicked, filterUnpicked, countUniqueRegions, pickRandomCountries } from "../utils/countries";
import CountryCard from "../components/CountryCard"
import CountryCardSkeleton from "../components/CountryCardSkeleton"
import TravelListCard from "../components/TravelListCard"
import PopularPicksCard from "../components/PopularPicksCard"

export default function MyPicksPage(){
  const { countries, loading, error } = useCountries();
  const { picks, isPicked, togglePick } = usePicks('picks');
  
  const pickedCountries = filterPicked(countries, picks);
  const uniqueContinents = countUniqueRegions(pickedCountries);
  const unpickedCountries = filterUnpicked(countries, picks);
  const initialPopularPicks = pickRandomCountries(unpickedCountries, 4);

  if (loading) return (
    <main className="px-6 sm:px-8">
      <h1 className="text-gray-800 text-3xl font-semibold pt-15 pb-4 text-center">My Picks</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mb-10'>
        {Array.from({ length: 6 }).map((_, i) => (
          <CountryCardSkeleton key={i} />
        ))}
      </div>
    </main>
  );

  if (error) return <p>{error}</p>;

  if (pickedCountries.length === 0) { 
    return(
      <main className="px-8 flex items-center justify-center" style={{ minHeight: 'calc(100vh - 64px)' }}>
        <div className="w-full flex flex-col items-center text-center space-y-6 sm:space-y-8">
          <h1 className="text-gray-800 text-3xl sm:text-4xl font-semibold pt-10">My Picks</h1>
          <h2 className="text-gray-800 text-base sm:text-lg">You haven't added any destinations yet. Start exploring to
            <br className="hidden md:block" /> find your next adventure!
          </h2>
          <img 
            src={MyPicks} 
            alt="Illustration showing empty travel picks with a globe and suitcase" 
            className="w-65 h-auto sm:w-80"
          />
          <h2 className="text-gray-800 text-base sm:text-lg">Let's get started. Explore amazing countries and add the ones you want
            <br className="hidden md:block"/> to visit to your picks!
          </h2>
          <Link 
            to="/explore"
            className="inline-flex items-center bg-red-600 text-white px-4 py-3 mb-10 font-semibold rounded-lg cursor-pointer transition-all duration-300 ease-out hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          >
            Explore
            <span className="ml-3">→</span>
          </Link>
        </div>
      </main>
    );
  }

  return(
    <main className="px-6 sm:px-8">
      <h1 className="text-gray-800 text-center text-3xl font-semibold pt-10 pb-4">Your List of Dream Destinations</h1>
      <h2 className='text-gray-800 text-center text-xl pb-4'>All the places you've saved in one spot. Ready to start planning?</h2>
      
      {/* Travel List - centered on small screens */}
      <div className="flex justify-center lg:hidden mb-6">
        <div className="w-full max-w-md">
          <TravelListCard 
            countriesCount={pickedCountries.length}
            continentsCount={uniqueContinents}
          />
        </div>
      </div>

      {/* Popular Picks - shows on lg+ only here */}
      <div className="hidden lg:block mb-6">
        <div className="flex flex-row gap-6">
          <div className="flex-1">
            <PopularPicksCard 
              initialCountries={initialPopularPicks}
              allUnpicked={unpickedCountries}
              togglePick={togglePick} 
            />
          </div>
          <div className="w-64">
            <TravelListCard 
              countriesCount={pickedCountries.length}
              continentsCount={uniqueContinents}
            />
          </div>
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mb-4'>
          {pickedCountries.map((country) => (
            <CountryCard 
              key={country.cca2}
              country={country}
              isPicked={isPicked}
              togglePick={togglePick}
            />
          ))}
      </div>

      {/* Popular Picks - shows below grid on small screens */}
      <div className="lg:hidden">
        <PopularPicksCard 
          initialCountries={initialPopularPicks}
          allUnpicked={unpickedCountries}
          togglePick={togglePick} 
        />
      </div>
    </main>
  )
}