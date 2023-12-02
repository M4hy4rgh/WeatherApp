import React from "react";

function TopButton({ setQ }) {
  const cities = [
    {
      id: 1,
      name: "Toronto",
    },
    {
      id: 2,
      name: "Vancouver",
    },
    {
      id: 3,
      name: "Montreal",
    },
    {
      id: 4,
      name: "London",
    },
    {
      id: 5,
      name: "Paris",
    },
  ];

  return (
    <div className=" flex items-center justify-around my-6 space-x-6">
      {cities.map((city) => (
        <button
          key={city.id}
          className="text-white font-medium text-md md:text-lg md:hover:scale-125 
          hover:scale-110 hover:underline hover:text-yellow-400 transition 
          duration-300 ease-in-out transform hover:-translate-y-1"
          onClick={() => setQ({ q: city.name })}
        >
          {city.name}
        </button>
      ))}
    </div>
  );
}

export default TopButton;
