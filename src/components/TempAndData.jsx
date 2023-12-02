import React from "react";
import {
  FaArrowUp,
  FaArrowDown,
  FaTemperatureHigh,
  FaWind,
} from "react-icons/fa";
import { FiSunset } from "react-icons/fi";
import { FaDroplet } from "react-icons/fa6";
import { IoSunny } from "react-icons/io5";
import { formatToLocalTime, } from "./Weather";

function TempAndData({
  weather: {
    description,
    icon_url,
    temp,
    temp_min,
    temp_max,
    sunrise,
    sunset,
    speed,
    humidity,
    feels_like,
    timezone,
  },
}) {
  return (
    <div>
      <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
        <p>{description}</p>
      </div>

      <div className="bg-black/40  rounded-xl w-[640px] px-4">
        <div className="flex flex-row items-center justify-between text-white py-3">
        <img src={icon_url} alt="weather icon" className="w-20 object-contain mix-blend-lighten  bg-slate-300/30 rounded-full" />
          <p className="text-5xl">{`${temp.toFixed()}°`}</p>
          <div className="flex flex-col space-y-2">
            <div className="flex font-light text-sm items-center justify-center">
              <FaTemperatureHigh size={18} className="mr-1" />
              Real fell:
              <span className="font-medium ml-1">{`${feels_like.toFixed()}°`}</span>
            </div>
            <div className="flex font-light text-sm items-center justify-center">
              <FaDroplet size={18} className="mr-1" />
              Humidity:
              <span className="font-medium ml-1">{`${humidity.toFixed()}%`}</span>
            </div>
            <div className="flex font-light text-sm items-center justify-center">
              <FaWind size={18} className="mr-1" />
              Wind:
              <span className="font-medium ml-1">{`${speed.toFixed()} MPH`}</span>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center space-x-2 text-white text-base py-3 mt-2">
          <IoSunny />
          <p className="font-light">
            Rise:{" "}
            <span className="font-medium ml-1">
              {formatToLocalTime(sunrise, timezone, "hh:mm a")}
              
            </span>
          </p>
          <p className="font-light">|</p>
          <FiSunset />
          <p className="font-light">
            Set:{" "}
            <span className="font-medium ml-1">
              {formatToLocalTime(sunset, timezone, "hh:mm a")}
            </span>
          </p>
          <p className="font-light">|</p>
          <FaArrowUp />
          <p className="font-light">
            High:{" "}
            <span className="font-medium ml-1">{`${temp_max.toFixed()}°`}</span>
          </p>
          <p className="font-light">|</p>
          <FaArrowDown />
          <p className="font-light">
            Low:{" "}
            <span className="font-medium ml-1">{`${temp_min.toFixed()}°`}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default TempAndData;

