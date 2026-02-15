import { usePopularPicks } from '../hooks/usePopularPicks';
import { formatPopulation } from '../utils/format';

export default function PopularPicksCard({ initialCountries, allUnpicked, togglePick }) {
  const { displayedCountries, replaceCountry } = usePopularPicks(initialCountries, allUnpicked);

  function handleAdd(countryCode) {
    togglePick(countryCode);
    replaceCountry(countryCode);
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h3 className="text-gray-800 text-lg font-semibold mb-4">Popular Picks</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {displayedCountries.map((country) => (
          <div key={country.cca2} className="flex flex-col bg-gray-50 rounded-lg p-4 border border-gray-200 relative">
            <button
              type="button"
              onClick={() => replaceCountry(country.cca2)}
              className="absolute top-2 right-2 w-6 h-6 flex items-center justify-center bg-gray-200 hover:bg-red-500 text-gray-600 hover:text-white rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500"
              aria-label="Replace country"
            >
              <span className="text-sm leading-none">×</span>
            </button>
            <div className="flex items-center gap-3 mb-2">
              <img 
                src={country.flags.svg} 
                alt={`Flag of ${country.name.common}`}
                className="w-8 h-6 object-cover rounded"
              />
              <div className="flex-1 min-w-0">
                <h4 className="text-gray-900 font-semibold text-sm truncate" title={country.name.common}>{country.name.common}</h4>
                <p className="text-gray-600 text-xs">{country.region}</p>
              </div>
            </div>
            <p className="text-gray-700 text-xs mb-3">
              {formatPopulation(country.population)} people
            </p>
            <button
              type="button"
              onClick={() => handleAdd(country.cca2)}
              className="w-full bg-green-600 text-white text-sm font-semibold py-2 rounded-md hover:bg-green-700 transition-colors duration-200 flex items-center justify-center gap-1 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              <span className="text-lg leading-none">+</span>
              <span>Add</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
