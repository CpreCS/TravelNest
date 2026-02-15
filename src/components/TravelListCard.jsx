import { Link } from "react-router-dom"
import CountryIcon from "../assets/CountryIcon/CountryIcon"
import FlagIcon from "../assets/FlagIcon/FlagIcon"

export default function TravelListCard({ countriesCount = 0, continentsCount = 0 }) {
  return(
    <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 flex flex-col lg:flex-col mb-6" style={{ height: 'calc(100% - 24px)' }}>
      <div className="flex flex-col lg:flex-col items-center lg:items-start gap-3 sm:gap-4 lg:gap-0 flex-1">
        <h1 className="text-gray-800 text-base sm:text-lg font-semibold lg:mb-4">Your Travel List</h1>
        <div className="flex flex-col sm:flex-row lg:flex-col gap-2 sm:gap-4 lg:gap-0 w-full items-center justify-center lg:items-start">
          <p className="flex items-center lg:mb-2">
            <FlagIcon/>
            <span><span className="ml-2 font-semibold">{countriesCount}</span> Countries</span>
          </p>
          <p className="flex items-center lg:mb-0">
            <CountryIcon/>
            <span><span className="ml-2 font-semibold">{continentsCount}</span> Continents</span>
          </p>
        </div>
      </div>
      <Link 
          to="/plans"
          className="bg-red-600 text-white px-4 sm:px-6 py-2 mt-3 sm:mt-4 font-semibold text-sm sm:text-base rounded-lg cursor-pointer transition-all duration-300 ease-out hover:bg-red-700 text-center"
        >
         Start Planning
         <span className="ml-2 sm:ml-3">→</span>
     	</Link>
    </div>
	)
}
