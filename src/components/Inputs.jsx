import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

function Inputs({ setQ, units, setUnits }) {
  const [city, setCity] = useState("");

  const unitsChange = (e) => {
    const selectedUnit = e.currentTarget.name;
    if (units !== selectedUnit) setUnits(selectedUnit);
  };
  
  const searchClick = () => {
    console.log(city);
    if (city !== "") setQ({ q: city });
  };

  return (
    <div className="flex flex-row justify-center mb-6 pt-4 gap-12">
      <div className="flex flex-row w-4/5 justify-center items-center space-x-3 ">
        <input
          className="text-lg font-light py-1 px-3 w-full shadow-xl rounded-full text-gray-700 
          focus:outline-none focus:shadow-outline capitalize placeholder:lowercase placeholder:text-sm"
          type="text"
          placeholder="Search for places"
          value={city}
          onChange={(e) => setCity(e.currentTarget.value)}
        />
        <FaSearch
          className="text-2xl text-white cursor-pointer transition ease-out hover:scale-125"
          size={23}
          onClick={searchClick}
        />
      </div>

      <div className="flex flex-row w-1/5 justify-center items-center">
        <button
          name="metric"
          className="text-white font-light text-lg hover:scale-125"
          onClick={unitsChange}
        >
          °C
        </button>
        <p className="text-white font-light  text-xl mx-2">|</p>
        <button
          name="imperial"
          className="text-white font-light text-lg hover:scale-125"
          onClick={unitsChange}
        >
          °F
        </button>
      </div>
    </div>
  );
}

export default Inputs;
