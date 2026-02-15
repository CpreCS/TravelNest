export default function PlansMyPickCard({ country, onSelect, isActive = false, tasksByCountry = {} }) {
  
  if (!country) return null;
  
  const countryTasks = tasksByCountry[country.cca2] || [];
  const completedCount = countryTasks.filter(t => t.completed).length;
  const totalCount = countryTasks.length;
  
  return (
    <button
      type="button"
      className={`flex border-b border-black/20 py-4 px-2 cursor-pointer w-full text-left focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-inset ${
        isActive ? 'shadow-lg border-none rounded-md bg-gradient-to-r from-white/100 via-white/50 to-transparent' : ''
      }`}
      onClick={() => onSelect(country)}
    >
      <img 
        src={country.flags.png} 
        alt={`Flag of ${country.name.common}`} 
        className="w-12 h-8 shadow-sm border border-black/10 rounded m-1 mb-5"
      />
      <div className="flex flex-col justify-between">
        <p className="text-gray-800 text-xl font-medium flex items-center ml-2">
          {country.name.common}
        </p>
        <p className="text-gray-700 text-sm ml-2">
            {totalCount > 0 ? `${completedCount}/${totalCount} completed` : 'No tasks yet'}
        </p>
      </div>
      <div className="flex items-center justify-end flex-1">
        {`>`}
      </div>
    </button>
  );
}