import React from "react";
import { Link, useLocation } from "react-router-dom";
import TravelNest from "../assets/TravelNest/TravelNest"
import blankPic from "../assets/blankPic.png"
import Explore from '../assets/Explore/Explore'
import Plans from '../assets/Plans/Plans'
import Welcome from '../assets/Welcome/Welcome'
import Picks from '../assets/Picks/Picks'

function TopNav({setIsOpen}) {

  const navItems = [
    { to: "/", icon: Welcome, label: "Welcome" },
    { to: "/explore", icon: Explore, label: "Explore" },
    { to: "/mypicks", icon: Picks, label: "My Picks" },
    { to: "/plans", icon: Plans, label: "Plans" }
  ];

  return (

    <header className='w-full h-16 flex items-center justify-center pt-0 fixed top-0 left-0 z-30 bg-white border-b border-gray-200'>
      <div className='w-full max-w-[1280px] flex items-center'>
        <div className='flex items-center gap-4 w-full lg:w-1/3'>
          <TravelNest className='text-red-600 w-8 h-8 flex-shrink-0 ml-6 lg:ml-6 mr' />
              <h1 className='text-xl text-gray-800 font-semibold tracking-wide'>
            TravelNest
          </h1>
          <button 
            className='flex w-full justify-end lg:hidden text-2xl text-gray-700 mr-6'
            onClick={() => setIsOpen(true)}
          >
            ☰
          </button>
        </div>

        <nav className='hidden lg:flex items-center gap-8 w-full justify-center'>
          {navItems.map(({ to, icon: Icon, label }) => {
            return (
              <Link
                key={to}
                to={to}
                className={`flex items-center text-gray-700 gap-2 py-2 pr-1 transition-colors whitespace-nowrap hover:underline underline-offset-8 decoration-gray-300 hover:decoration-gray-700`}
              >
                <Icon className='w-5 h-5' />
                <span className='text-sm font-normal'>{label}</span>
              </Link>
            );
          })}
        </nav>

        <div className='hidden lg:flex justify-end w-1/3'>
          <button 
            className='h-9 px-3 rounded-md text-sm text-gray-700 bg-transparent cursor-pointer transition-colors mr-6 underline-offset-8 hover:underline decoration-gray-300 hover:decoration-gray-700'
            onClick={() => console.log('Login feature has not been added yet.')}
          >Log in</button>
        </div>
      </div>
    </header>
  )
}

export default TopNav
