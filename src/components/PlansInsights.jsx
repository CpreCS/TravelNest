import { countryTasks, generalTravelChecklist } from "../utils/countryTasks";

export default function PlansInsights({ selectedCountry }) {
  if (!selectedCountry) {
    return (
      <div className="text-center pb-4">
        <h2 className="text-gray-800">Select a country to view insights</h2>
      </div>
    );
  }

  const countryName = selectedCountry.name?.common || "Unknown";
  const tasks = countryTasks[countryName] || [
    `Explore top attractions, try local food, and experience the culture in ${countryName}.`,
  ];

  return (
    <div className="flex flex-col pt-5 pb-4">
      <div className="flex items-center gap-4 px-3 mb-4">
        <img
          src={selectedCountry?.flags?.png}
          alt={selectedCountry?.name?.common || "Flag"}
          className="w-10 h-7 shadow-sm border border-black/10 rounded"
        />
        <h1 className="truncate text-gray-800 text-xl font-semibold" title={selectedCountry?.name?.common}>{selectedCountry?.name?.common}</h1>
      </div>
      <div className="flex flex-col gap-2 border-b border-black/20 pb-4 mb-4">
        <p className="text-gray-700 px-3" title={selectedCountry?.capital?.[0]}>Capital: {selectedCountry?.capital?.[0] || "N/A"}</p>
        <p className="text-gray-700 px-3" title={selectedCountry?.population?.toLocaleString()}>Population: {selectedCountry?.population?.toLocaleString() || "N/A"}</p>
        <p className="text-gray-700 px-3" title={Object.values(selectedCountry?.languages || {})[0]}>Language: {Object.values(selectedCountry?.languages || {})[0] || "N/A"}</p>
      </div>
      <div className="px-2">
        <h2 className="text-xl font-medium mb-3">Trip Suggestions</h2>
        <div className="bg-gray-100 p-3 rounded mt-2 text-gray-800">
          <div className="mb-2 font-semibold">Things to do:</div>
          <ul className="list-disc ml-5">
            {tasks.map((t, i) => <li key={i}>{t}</li>)}
          </ul>
        </div>
        <div className="bg-gray-50 p-3 rounded mt-4 text-gray-700">
          <div className="mb-2 font-semibold">Before you go:</div>
          <ul className="list-disc ml-5">
            {generalTravelChecklist.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        </div>
      </div>
    </div>
  );
}