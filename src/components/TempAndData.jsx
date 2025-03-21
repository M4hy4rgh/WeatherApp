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
import { formatToLocalTime } from "./Weather";

/**
 * TempAndData component displays comprehensive weather information
 * @param {Object} props - Component props
 * @param {Object} props.weather - Weather data object
 */
function TempAndData({ weather }) {
    const {
        description = "",
        icon_url = "",
        temp = 0,
        temp_min = 0,
        temp_max = 0,
        sunrise = 0,
        sunset = 0,
        speed = 0,
        humidity = 0,
        feels_like = 0,
        timezone = 0,
    } = weather;

    return (
        <div className="flex flex-col items-center justify-center w-full md:w-3xl">
            <div className="flex items-center justify-center py-6 text-xl text-cyan-300 capitalize">
                <p>{description}</p>
            </div>

            <div className="flex flex-col bg-black/40 rounded-xl w-9/11 px-4">
                <div className="flex flex-col md:flex-row items-center justify-center text-white py-3">
                    <div className="hidden md:flex min-w-48 w-full items-center justify-around ">
                        <img
                            src={icon_url}
                            alt={`Weather condition: ${description}`}
                            className="w-20 object-contain mix-blend-lighten bg-slate-300/30 rounded-full"
                        />
                        <p
                            className="text-5xl"
                            aria-label={`${temp.toFixed()} degrees`}
                        >{`${temp.toFixed()}°`}</p>
                    </div>

                    <div className="w-full flex md:hidden items-center justify-around pb-8">
                        <img
                            src={icon_url}
                            alt="weather icon"
                            className="w-20 object-contain mix-blend-lighten bg-slate-300/30 rounded-full"
                        />
                        <p className="text-5xl">{`${temp.toFixed()}°`}</p>
                    </div>

                    <div className="flex flex-col md:items-start justify-center space-y-2 sm:w-fit sm:px-10">
                        <div className="flex font-light text-sm items-center justify-center pl-1 gap-1">
                            <FaTemperatureHigh size={18} className="mr-1" />
                            Feels like:
                            <span
                                className="font-medium ml-1"
                                aria-label={`
                            Feels like ${feels_like.toFixed()} degrees
                                `}
                            >{`${feels_like.toFixed()}°`}</span>
                        </div>
                        <div className="flex font-light text-sm items-center justify-center gap-2">
                            <FaDroplet size={18} className="mr-1" />
                            Humidity:
                            <span
                                className="font-medium ml-1"
                                aria-label={`Humidity is ${humidity.toFixed()}%`}
                            >{`${humidity.toFixed()}%`}</span>
                        </div>
                        <div className="flex font-light text-sm items-center justify-center pl-1 gap-1">
                            <FaWind size={18} className="mr-1" />
                            Wind:
                            <span
                                className="font-medium ml-1"
                                aria-label={`Wind speed is ${speed.toFixed()} MPH`}
                            >{`${speed.toFixed()} MPH`}</span>
                        </div>
                    </div>
                </div>
                <div className="w-full flex flex-col md:flex-row items-center justify-center space-x-2 md:space-x-4 text-white text-base py-3 mt-2">
                    <div className="flex justify-between items-center space-x-2 ">
                        <IoSunny />
                        <p className="font-light" aria-label={`Sunrise at ${formatToLocalTime(sunrise, timezone)}`}>
                            Rise:{" "}
                            <span
                                className="font-medium ml-1"
                            >
                                {formatToLocalTime(sunrise, timezone)}
                            </span>
                        </p>
                    </div>
                    <p className=" hidden md:block font-light">|</p>
                    <div className="flex justify-between items-center space-x-2">
                        <FiSunset />
                        <p className="font-light" aria-label={`Sunset at ${formatToLocalTime(sunset, timezone)}`}>
                            Set:{" "}
                            <span
                                className="font-medium ml-1"
                            >
                                {formatToLocalTime(sunset, timezone)}
                            </span>
                        </p>
                    </div>
                    <p className="hidden md:block font-light">|</p>
                    <div className="flex justify-between items-center space-x-2 md:space-x-4">
                        <div className="flex justify-center items-center space-x-2">
                            <FaArrowUp />
                            <p className="font-light" aria-label={`High of ${temp_max.toFixed()} degrees`}>
                                High:{" "}
                                <span className="font-medium ml-1">{`${temp_max.toFixed()}°`}</span>
                            </p>
                        </div>
                        <p className=" font-light">|</p>
                        <div className="flex justify-center items-center space-x-2">
                            <FaArrowDown />
                            <p className="font-light" aria-label={`Low of ${temp_min.toFixed()} degrees`}>
                                Low:{" "}
                                <span className="font-medium ml-1">{`${temp_min.toFixed()}°`}</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TempAndData;
