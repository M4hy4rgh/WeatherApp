import React from "react";
import { formatToLocalTime } from "./Weather";
import { FaMapMarkerAlt, FaClock } from "react-icons/fa";

/**
 * TimeAndLocation component  thedisplays current time and location information
 * @param {Object} props - Component props
 * @param {Object} props.weather - Weather data containing location and time information
 * @param {number} props.weather.dt - Unix timestamp
 * @param {number} props.weather.timezone - Timezone offset in seconds
 * @param {string} props.weather.name - City name
 * @param {string} props.weather.country - Country code
 */
function TimeAndLocation({ weather }) {
    const { dt, timezone, name = "Unknown", country = "" } = weather;

    const locationString = country ? `${name}, ${country}` : name;

    return (
        <div>
            <div className="flex items-center justify-center mt-6 mb-5">
                <FaClock
                    className="text-white text-lg mr-2"
                    aria-hidden="true"
                />
                <p className="text-white text-xl font-normal">
                    {formatToLocalTime(dt, timezone)}
                </p>
            </div>

            <div className="flex items-center justify-center my-3">
                <FaMapMarkerAlt
                    className="text-white text-2xl mr-2"
                    aria-hidden="true"
                />
                <p className="text-white text-3xl font-medium">
                    {locationString}
                </p>
            </div>
        </div>
    );
}

export default TimeAndLocation;
