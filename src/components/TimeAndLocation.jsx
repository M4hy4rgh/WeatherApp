import React from "react";
import { formatToLocalTime } from "./Weather";

function TimeAndLocation({ weather: { dt, timezone, name, country } }) {
  return (
    <div>
      <div className="flex items-center justify-center mt-6 mb-5">
        <p className="text-white text-xl font-extralight">
          {formatToLocalTime(dt, timezone, "h:mm a")}
        </p>
      </div>

      <div className="flex items-center justify-center my-3">
        <p className="text-white text-3xl font-medium">{`${name}, ${country}`}</p>
      </div>
    </div>
  );
}

export default TimeAndLocation;
