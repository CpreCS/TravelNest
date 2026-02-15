import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import ThingsToDoSection from "../components/ThingsToDoSection";
import AddTaskSection from "../components/AddTaskSection";
import { useCountries } from "../hooks/useCountries";
import { usePicks } from "../hooks/usePicks";
import { useSelectedCountry } from "../hooks/useSelectedCountry";
import { useTasks } from "../hooks/useTasks";
import { filterPicked } from "../utils/countries";
import PlansMyPickCard from "../components/PlansMyPickCard";
import PlansInsightsAI from "../components/PlansInsights";

export default function PlansPage() {
  const { countries } = useCountries();
  const { picks, isPicked, togglePick } = usePicks("picks");
  const filteredCountries = filterPicked(countries, picks);
  const [selectedCountry, setSelectedCountry] = useSelectedCountry(filteredCountries);
  const {
    currentTasks,
    tasksByCountry,
    addingTask,
    newTask,
    setNewTask,
    startAddingTask,
    cancelAddingTask,
    addTask,
    toggleTaskCompleted,
    deleteTask
  } = useTasks(selectedCountry);
  const taskInputRef = useRef(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const insightsRef = useRef(null);
  const [scrollHeight, setScrollHeight] = useState(null);

  // Track insights panel height for responsive layout adjustments on desktop
  useEffect(() => {
    if (window.innerWidth >= 1024 && insightsRef.current) {
      setScrollHeight(insightsRef.current.offsetHeight);
    } else {
      setScrollHeight(null);
    }
  }, [selectedCountry, filteredCountries.length, currentTasks.length]);

  function handleTaskKeyDown(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      addTask();
    }
  }

  return (
    <main className="px-6 sm:px-8">
      <h1 className="text-gray-800 text-center text-3xl font-semibold pt-10 pb-4">Plan Your Adventure</h1>
      <h2 className="text-gray-800 text-center text-xl pb-4">Create tasks, track experiences, and design your perfect trip</h2>
      
      {/* Dropdown for picks on small screens - above main content */}
      <div className="block lg:hidden w-full mb-6">
        {filteredCountries && filteredCountries.length > 0 && (
          <div className="relative w-full max-w-xs mx-auto">
            <button
              type="button"
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 bg-white text-gray-800 flex items-center justify-between"
              onClick={() => setShowDropdown((prev) => !prev)}
            >
              <span>
                {selectedCountry ? (selectedCountry.name.common.length > 22 ? selectedCountry.name.common.slice(0, 20) + '…' : selectedCountry.name.common) : 'Select a country'}
              </span>
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
            </button>
            {showDropdown && (
              <ul className="absolute left-0 right-0 mt-2 bg-white border rounded-md z-50 shadow-lg max-h-60 overflow-y-auto">
                {filteredCountries.map(country => (
                  <li key={country.cca2}>
                    <button
                      type="button"
                      className={`w-full text-left px-4 py-2 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-500 ${selectedCountry?.cca2 === country.cca2 ? 'bg-red-100 text-red-700 font-semibold' : ''}`}
                      onClick={() => {
                        setSelectedCountry(country);
                        setShowDropdown(false);
                      }}
                    >
                      {country.name.common.length > 22 ? country.name.common.slice(0, 20) + '…' : country.name.common}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>

      <div className="flex mb-6 gap-6 flex-col lg:flex-row justify-start">
        {/* Sidebar: only visible on lg+ screens */}
        <div className="hidden lg:flex flex-col w-1/4 bg-gradient-to-r from-white/100 via-black/2 to-transparent px-2 py-5">
          <h2 className="text-gray-800 text-center text-2xl font-medium pb-4" style={{ flexShrink: 0 }}>My Picks</h2>
          <div style={{ maxHeight: '800px', overflowY: 'auto' }}>
            {filteredCountries && filteredCountries.map((country) => (
              <PlansMyPickCard
                key={country.cca2}
                country={country}
                onSelect={setSelectedCountry}
                isActive={selectedCountry?.cca2 === country.cca2}
                tasksByCountry={tasksByCountry}
              />
            ))}
            <Link
              to="/explore"
              className="flex mb-4 border-b border-black/20 pb-5 pt-5  text-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-inset rounded"
              aria-label="Add a destination by exploring countries"
            >
              <span className="ml-4">+</span>
              <span className="w-full text-center"> Add a Destination</span>
            </Link>
          </div>
        </div>

        <div className="flex flex-col w-full lg:w-1/2 bg-gradient-to-r from-white/100 via-black/2 to-transparent px-2 py-5 justify-start">
          {selectedCountry ? (
            <>
              <div className="flex mb-4">
                <img
                  src={selectedCountry?.flags?.png}
                  alt={selectedCountry?.name?.common || "Flag"}
                  className="w-12 h-8 shadow-sm border border-black/10 rounded"
                />
                <h2 className="text-2xl font-semibold text-gray-800 ml-4">{selectedCountry?.name?.common}</h2>
              </div>

              <div>
                <h3 className="text-xl mb-4">{selectedCountry?.name?.common} Trip</h3>
              </div>

              <AddTaskSection
                addingTask={addingTask}
                newTask={newTask}
                setNewTask={setNewTask}
                startAddingTask={startAddingTask}
                cancelAddingTask={cancelAddingTask}
                addTask={addTask}
                taskInputRef={taskInputRef}
                handleTaskKeyDown={handleTaskKeyDown}
              />

              <ThingsToDoSection
                currentTasks={currentTasks}
                addingTask={addingTask}
                newTask={newTask}
                setNewTask={setNewTask}
                startAddingTask={startAddingTask}
                cancelAddingTask={cancelAddingTask}
                addTask={addTask}
                toggleTaskCompleted={toggleTaskCompleted}
                deleteTask={deleteTask}
                taskInputRef={taskInputRef}
                maxHeight="40vh"
              />
            </>
          ) : (
            <div className="flex flex-col items-center justify-center h-full">
              <p className="text-gray-800 text-lg mb-4">Add a country to your picks to view and manage your travel plans.</p>
            </div>
          )}
        </div>

        <div className="flex flex-col w-full lg:w-1/4 px-2 justify-start mt-8 lg:mt-0" ref={insightsRef}>
          <h2 className="text-gray-800 text-2xl font-medium pl-2 pb-4">Trip Insights</h2>
          <div>
              <PlansInsightsAI selectedCountry={selectedCountry} />
          </div>
        </div>
      </div>
    </main>
  );
}
