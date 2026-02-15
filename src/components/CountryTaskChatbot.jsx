
import { countryTasks, generalTravelChecklist } from "../utils/countryTasks";

export default function CountryTaskSuggestions({ selectedCountry }) {
  if (!selectedCountry) {
    return (
      <div className="max-w-md mx-auto p-4 bg-white rounded shadow text-center">
        <h2 className="text-xl font-bold mb-2">Travel Suggestions</h2>
        <p className="text-gray-700">Select a country to view travel suggestions and tips.</p>
      </div>
    );
  }

  const countryName = selectedCountry.name?.common || "Unknown";
  const tasks = countryTasks[countryName] || [
    `Explore top attractions, try local food, and experience the culture in ${countryName}.`,
    "(Add more details for this country!)"
  ];

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-2">Travel Suggestions for {countryName}</h2>
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
  );
}
