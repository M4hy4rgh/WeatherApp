import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

/**
 * WeatherSearch component with city search and temperature unit toggle
 * @param {Object} props - Component props
 * @param {Function} props.setQ - Function to update search query
 * @param {string} props.units - Current temperature units ('metric' or 'imperial')
 * @param {Function} props.setUnits - Function to update temperature units
 */
function Inputs({ setQ, units, setUnits }) {
    const [city, setCity] = useState("");
    const [isSearching, setIsSearching] = useState(false);

    const handleUnitChange = (selectedUnit) => {
        if (units !== selectedUnit) setUnits(selectedUnit);
    };

    const handleSearch = (e) => {
        if (e) e.preventDefault();

        if (city.trim()) {
            setIsSearching(true);
            setQ({ q: city.trim() });

            setCity("");
            setTimeout(() => setIsSearching(false), 1000);
        }
    };
    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleSearch();
        }
    };

    return (
        <div className="w-full flex justify-start xs:justify-center  mb-6 pt-4 px-3 space-x-2  ">
            <form
                className="w-full sm:w-3/4 max-w-md"
                onSubmit={handleSearch}
                role="search"
                aria-label="Search for city weather"
            >
                <div className="flex flex-row px-3 justify-center items-center space-x-3 md:px-0 md:w-4/5 max-w-sm">
                    <label htmlFor="city-search" className="sr-only">
                        Search for city
                    </label>
                    <input
                        id="city-search"
                        className="text-lg font-light text-gray-700 bg-white w-full pb-1 px-3 shadow-xl rounded-full
                    focus:outline-none focus:shadow-outline capitalize placeholder:lowercase placeholder:text-sm"
                        type="text"
                        placeholder="Search for a ciity..."
                        value={city}
                        onChange={(e) => setCity(e.currentTarget.value)}
                        onKeyPress={handleKeyPress}
                        disabled={isSearching}
                        aria-label="City name"
                    />
                    <button
                        type="submit"
                        className={`transition-all duration-200  
                        ${isSearching ? "opacity-50 cursor-wait" : "ease-in-out hover:scale-115"}
                        `}
                        disabled={isSearching || !city.trim()}
                        aria-label="Search"
                    >
                        <FaSearch
                            className="text-white cursor-pointer transition "
                            size={23}
                        />
                    </button>
                </div>
            </form>

            <div className="flex flex-row w-1/5 justify-center items-center">
                <button
                    type="button"
                    aria-pressed={units === "metric"}
                    name="metric"
                    className={`text-white text-lg xs:text-xl sm:text-2xl hover:scale-110
                        ${units === "metric" 
                    ? "text-yellow-400" 
                    : ""}`}
                    onClick={() => handleUnitChange("metric")}
                >
                    °C
                </button>
                <p className="text-white text-xl xs:text-xl sm:text-2xl mx-2">
                    /
                </p>
                <button
                    type="button"
                    aria-pressed={units === "imperial"}
                    name="imperial"
                    className={`text-white text-lg xs:text-xl sm:text-2xl hover:scale-110
                        ${units === "imperial" 
                    ? "text-yellow-400" 
                    : ""}`}
                    onClick={() => handleUnitChange("imperial")}
                    >
                    °F
                </button>
            </div>
        </div>
    );
}

export default Inputs;
