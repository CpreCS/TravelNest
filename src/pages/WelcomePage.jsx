import GlobeIcon from "../assets/GlobeIcon/GlobeIcon"
import SaveIcon from "../assets/SaveIcon/SaveIcon"
import PlanIcon from "../assets/PlanIcon/PlanIcon"
import WelcomePic from "../assets/WelcomePic.png"
import { Link } from "react-router-dom"

export default function WelcomePage(){
  return(

    <main className="flex flex-col sm:flex-row items-center" style={{ minHeight: 'calc(100vh - 64px)' }}>
      <div className="px-8 rounded-xl pt-12 sm:pt-0">
        <h1 className="text-3xl md:text-[1.8rem] lg:text-4xl xl:text-5xl text-gray-800 font-bold">
          Plan Trips.
          <br className="md:hidden" /> Save dreams.
          <br />Build your travel
          <br className="md:hidden" /> bucket list.
        </h1>

        <h2 className="lg:text-lg text-gray-700 mt-6 flex items-start gap-3">
          <GlobeIcon className="w-8 h-8 text-red-600 flex-shrink-0" />
          <span><span className="font-bold whitespace-nowrap">Explore Destinations. </span>Discover countries, cities, and hidden gems you've always wanted to visit.</span>
        </h2>
        <h2 className="lg:text-lg text-gray-700 mt-6 flex items-start gap-3">
          <SaveIcon className="w-8 h-8 text-red-600 flex-shrink-0" />
          <span><span className="font-bold whitespace-nowrap">Save Countries. </span>Build a personal list of places you want to travel to, all in one spot.</span>
        </h2>
        <h2 className="lg:text-lg text-gray-700 mt-6 flex items-start gap-3">
          <PlanIcon className="w-8 h-8 text-red-600 flex-shrink-0" />
          <span><span className="font-bold whitespace-nowrap">Plan Experiences. </span>Track activities, landmarks, and moments you want to experience in each country.</span>
        </h2>
        <Link
          to="/explore"
          className="inline-flex items-center bg-red-600 text-white px-4 py-3 font-semibold rounded-lg my-8 cursor-pointer transition-all duration-300 ease-out hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
        >
          Explore
          <span className="ml-3">→</span>
        </Link>
      </div>
      <div className="py-8 px-8 sm:pr-8 sm:pl-0">
        <img src={WelcomePic} alt="TravelNest Welcome Illustration" className="w-120 lg:w-150 h-auto" />
      </div>
    </main>
  )
}
