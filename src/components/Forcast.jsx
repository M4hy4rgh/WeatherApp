import React from "react";

/**
 * WeatherForecast component displays a list of forecast items
 * @param {Object} props
 * @param {string} props.title - Section title (e.g., "5-Day Forecast")
 * @param {Array} props.items - Array of forecast data objects
 */

function Forecast({ title, items }) {
    const isEmpty = !items || items.length === 0;

    console.log(items);
    return (
        <div className="flex flex-col items-center justify-center w-full px-4">
            <div className="flex items-center self-start w-full mt-6 border-b border-white">
                <p className="text-white font-medium uppercase"
                aria-label={title}
                >{title}</p>
            </div>
            {isEmpty && (
                <div className="text-white text-center py-4">
                    <p>No forecast data available!</p>
                </div>
            )}
            {!isEmpty && (
            <div className="flex flex-col md:flex-row items-center justify-between text-white w-9/11 md:w-full  px-4 py-1 ">
                {items &&
                    items.map((item, index) => (
                        <div
                            key={index}
                            className="flex md:flex-col items-center justify-between w-full p-2"
                        >
                            <p className="font-semibold text-sm"
                            aria-label={`Weather on ${item.title} has ${item.description || "a Weather"}`}>
                                {item.title}
                            </p>
                            <img
                                src={item.icon_url}
                                className="w-12 my-1 bg-slate-300/30 rounded-full"
                                alt={`${item.description || "Weather"} icon`}
                                />
                            <p className="font-medium"
                            aria-label={`Temperature on ${item.title} is ${item.temp.toFixed()} degrees`}
                            >{`${item.temp.toFixed()}°`}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Forecast;
