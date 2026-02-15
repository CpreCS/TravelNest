import React, { useState, useRef, useEffect } from 'react';
import SearchIcon from '../assets/SearchIcon/SearchIcon';
import { REGIONS } from '../utils/regions';

export default function Searchbar({
  searchText = '',
  onSearchChange = () => {},
  selectedRegion = 'All',
  onRegionChange = () => {},
  regions = REGIONS
}) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open]);

  return (
    <div className="flex flex-col items-center mt-6 mb-8 relative z-20 px-4 sm:px-0">
      <div className="relative w-full">
        <div className="flex items-center bg-white rounded-md shadow-sm ring-1 ring-gray-200 focus-within:ring-2 focus-within:ring-red-500 px-2 w-full max-w-[700px] mx-auto">
          <SearchIcon className="w-5 h-5 text-gray-500 ml-1" />
          <label htmlFor="search-countries" className="sr-only">Search countries</label>
          <input
            id="search-countries"
            type="text"
            value={searchText}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search countries..."
            className="flex-1 px-3 py-2 focus:outline-none rounded-md"
          />
        </div>

        <div className="mt-3 w-full flex justify-center">
          <div className="relative lg:hidden w-full max-w-[690px] mx-auto flex justify-center" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setOpen(!open)}
              className="px-3 py-2 text-white bg-red-600 hover:bg-red-700 hover:shadow-md hover:shadow-black/20 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 flex items-center gap-2 cursor-pointer"
            >
              <span>Filter By:</span>
              <span className="font-semibold">{selectedRegion}</span>
            </button>

            {open && (
              <ul className="absolute left-0 mt-2 w-52 bg-white border rounded-md z-50 shadow-lg">
                {regions.map((r) => (
                  <li key={r}>
                    <button
                      type="button"
                      onClick={() => { 
                        onRegionChange(r); 
                        setOpen(false); 
                      }}
                      className={`w-full text-left px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 ${
                        selectedRegion === r ? 'bg-red-100 text-red-700 font-semibold' : 'hover:bg-gray-100'
                      }`}
                    >
                      {r}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="hidden lg:flex items-center justify-center gap-2 flex-wrap w-full max-w-[690px] mx-auto">
            {regions.map((r) => (
              <button
                key={r}
                type="button"
                onClick={() => onRegionChange(r)}
                className={`px-3 py-2 rounded-md text-sm border cursor-pointer transition focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 ${
                  selectedRegion === r 
                    ? 'bg-red-600 text-white border-red-600 hover:bg-red-700 hover:border-red-700' 
                    : 'bg-white text-gray-800 border-gray-300 hover:bg-gray-100 hover:shadow-sm hover:shadow-black/10'
                }`}
              >
                {r}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
