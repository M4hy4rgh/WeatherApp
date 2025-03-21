import React, { useEffect, useState } from "react";
import CitySelector from "./components/CitySelector";
import Inputs from "./components/Inputs";
import TimeAndLocation from "./components/TimeAndLocation";
import TempAndData from "./components/TempAndData";
import Forcast from "./components/Forcast";
import { getCurrentWeather, getForecastWeather } from "./components/Weather";

/**
 * Main Weather App component
 * @returns {JSX.Element}
 */

function App() {
    const [weather, setWeather] = useState(null);
    const [forecast, setForecast] = useState(null);
    const [units, setUnits] = useState("metric");
    const [q, setQ] = useState({ q: "Toronto" });

    useEffect(() => {
        const fetchData = async () => {
            const response = await getCurrentWeather(q.q, units);
            setWeather(response);
        };

        fetchData();
    }, [q, units]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await getForecastWeather(q.q, units);
            setForecast(response);
        };

        fetchData();
    }, [q, units]);

    return (
        <div className="min-h-screen min-w-screen bg-black/25 bg-[url(assets/myPic.jpg)] bg-blend-multiply bg-cover bg-center bg-no-repeat flex justify-center items-start select-none">
            <div className="min-w-2xs w-5/6 max-w-2xl flex flex-col justify-center items-center mx-auto py-5 my-4 border border-white shadow-md md:shadow-lg shadow-gray-400">
                <CitySelector setQ={setQ} activeCity="toronto" />
                <Inputs setQ={setQ} units={units} setUnits={setUnits} />
                {weather && (
                    <div className="flex flex-col items-center justify-center w-full">
                        <TimeAndLocation weather={weather} />
                        <TempAndData weather={weather} />
                        <Forcast title="Daily Forcast" items={forecast} />
                    </div>
                )}
            </div>
        </div>
    );
}

export default App;
