import React from "react";
import { useState, useEffect } from "react";
import NavItem from "./SidebarItem";

function Sidebar({ isOpen, setIsOpen }) {

  const [mounted, setMounted] = useState(false);

  useEffect(()=>{
    setMounted(true);
  }, []);

  return (
    <>
      <div
        className={`
          fixed inset-0 bg-black/80 backdrop-blur-sm z-40
          lg:hidden
          ${mounted ? "transition-opacity duration-300" : ""}
          ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
        onClick={() => setIsOpen(false)}
      />
      <div
        className={`
          fixed top-0 right-0 h-screen bg-white z-50
          w-64
          ${mounted ? "transition-transform duration-300" : ""}
          ${isOpen ? "translate-x-0" : "translate-x-full"}
          lg:hidden
        `}
      >
        <div className="flex justify-end">
          <button
            className="text-gray-800 m-3.5 font-bold"
            onClick={() => setIsOpen(false)}
          >
            ✕
          </button>
        </div>
        <div>
          <button 
            className='w-56 h-10 mx-4 rounded-4xl text-white text-sm font-medium bg-gray-800 cursor-pointer border border-gray-200 hover:border-[#1F6FEB] transition-all'
          >Log In</button>

          <NavItem to="/" setIsOpen={setIsOpen}>Welcome</NavItem>
          <NavItem to="/explore" setIsOpen={setIsOpen}>Explore</NavItem>
          <NavItem to="/mypicks" setIsOpen={setIsOpen}>My Picks</NavItem>
          <NavItem to="/plans" setIsOpen={setIsOpen}>Plans</NavItem>
        </div>
      </div>
    </>
    
  )
}

export default Sidebar
