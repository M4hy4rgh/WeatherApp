import React, { useMemo, useState } from "react";

const DEFAULT_CITIES = [
    { id: "toronto", name: "Toronto" },
    { id: "vancouver", name: "Vancouver" },
    { id: "montreal", name: "Montreal" },
    { id: "london", name: "London" },
    { id: "paris", name: "Paris" },
];

/**
 * CitySelector component that displays buttons for selecting cities
 * @param {Object} props - Component props
 * @param {function} props.setQ - Function to set the query with selected city
 * @param {Array} [props.cities] - Optional custom list of cities to display
 * @param {string} [props.activeCity] - Currently selected city
 */
function CitySelector({ setQ, cities = DEFAULT_CITIES, activeCity = "" }) {
    const cityOptions = useMemo(() => cities, [cities]);
    const [activeCityname, setActiveCityname] = useState(activeCity);

    const handleCitySelect = (cityName) => {
        setQ({ q: cityName });
        setActiveCityname(cityName);
    };

    return (
        <div className="flex flex-wrap gap-3 my-6 w-full justify-evenly">
            {cityOptions.map((city) => {
                const isActive =
                    city.name.toLowerCase() === activeCityname.toLowerCase();

                return (
                    <button
                        key={city.id}
                        className={`
                py-2 px-3 text-white font-medium text-md md:text-lg
                transition duration-300 ease-in-out transform
                hover:scale-110 hover:underline hover:underline-offset-8 hover:decoration-2 
                focus:outline-none focus:underline focus:underline-offset-8 focus:decoration-2
                ${isActive ? "underline underline-offset-8 decoration-2": ""}`}
                        onClick={() => handleCitySelect(city.name)}
                        aria-label={`Show weather for ${city.name}`}
                        aria-pressed={isActive}
                    >
                        {city.name}
                    </button>
                );
            })}
        </div>
    );
}

export default CitySelector;
