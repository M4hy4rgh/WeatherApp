import React from "react";


function Forecast({ title, items }) {
  return (
    <div>
      <div className="flex items-center justify-start mt-6">
        <p className="text-white font-medium uppercase">{title}</p>
      </div>
      <hr className="my-2" />

      <div className="flex flex-row items-center justify-between text-white w-[620px] px-4 py-1 ">
        {items && items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-2"
          >
            <p className="font-semibold text-sm">{item.title}</p>
            <img
              src={item.icon_url}
              className="w-12 my-1  bg-slate-300/30 rounded-full"
              alt="weather icon"
            />
            <p className="font-medium">{`${item.temp.toFixed()}°`}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Forecast;