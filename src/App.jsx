import React, { useEffect, useState } from "react";
import TopButton from "./components/TopButton";
import Inputs from "./components/Inputs";
import TimeAndLocation from "./components/TimeAndLocation";
import TempAndData from "./components/TempAndData";
import Forcast from "./components/Forcast";
import { getWeatherData, forcastWeather } from "./components/Weather";

function App() {
  const [weather, setWeather] = useState(null);
  const [forcast, setForcast] = useState(null);
  const [units, setUnits] = useState("metric");
  const [q, setQ] = useState({ q: "Toronto" });

  useEffect(() => {
    const fetchData = async () => {
      const response = await getWeatherData("weather", q.q, units);
      setWeather(response);
      console.log(response);
    };

    fetchData();
  }, [q, units]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await forcastWeather("forecast", q.q, units);
      setForcast(response);
      console.log(response);
    };

    fetchData();
  }, [q, units]);


  return (
    <div className="app relative h-full w-full sm:h-screen md:h-full lg:h-full xl:h-full 2xl:h-screen ">
      <div className="h-full w-full sm:h-screen md:h-full lg:h-full xl:h-full 2xl:h-screen bg-black/20 flex justify-center items-start">
        <div
          className="container mx-auto max-w-screen-md flex flex-col justify-center items-center
         py-5 my-4 border shadow-lg shadow-gray-400"
        >
          <TopButton setQ={setQ} />
          <Inputs setQ={setQ} units={units} setUnits={setUnits} />
          {weather && (
            <div>
              <TimeAndLocation weather={weather} />
              <TempAndData weather={weather} />
              <Forcast title="Daily Forcast" items={forcast} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
