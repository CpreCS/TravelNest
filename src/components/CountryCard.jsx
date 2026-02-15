import PickButton from './PickButton';
import { formatPopulation } from '../utils/format';

export default function CountryCard({ country, isPicked, togglePick }) {
  const capital = country.capital && country.capital[0] ? country.capital[0] : 'N/A';
  
  return (
    <div className='overflow-hidden rounded-xl shadow-lg'>
      <div className='relative aspect-[3/1] lg:aspect-[4/1]'>
        <img
          src={country.flags.png}
          alt={`Flag of ${country.name.common}`}
          className='absolute inset-0 w-full h-full object-cover'
        />

        <div className='absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent' />
        <div className='absolute inset-0 bg-white/10 mix-blend-soft-light' />
        
        <div className='relative z-10 h-full min-h-[112px] p-4 flex flex-col items-start justify-start gap-2'>
          <h2 className='truncate max-w-[85%] text-white text-xl sm:text-2xl font-semibold tracking-tight drop-shadow-sm bg-gradient-to-r from-black/60 via-black/60 to-transparent rounded px-2 py-1' title={country.name.common}>
            {country.name.common}
          </h2>
          <div className='inline-flex items-center rounded-full bg-white/20 px-3 py-[3px] text-white text-xs border border-white/25 backdrop-blur-[2px] w-fit mb-3'>
            {country.region}
          </div>
        </div>
      </div>

      <div className='bg-white p-4'>
        <div className='flex items-center gap-4'>
          <div className='flex justify-start'>
            <div>
              <div className='text-gray-900 text-sm'>
                Population: {formatPopulation(country.population)}
              </div>
              <div className='text-gray-900 text-sm'>
                Capital: {capital}
              </div>
            </div>
          </div>
          <div className='flex-1 flex justify-end'>
            <PickButton
              isPicked={isPicked(country.cca2)}
              onToggle={() => togglePick(country.cca2)}
            />
          </div>
        </div>
      </div>
    </div>
  )
}