import { DateTime } from "luxon";

const API_KEY = "e9db56274257f4c0f4a5e5d753f46ec7";
const icon_url = (icon) => `https://openweathermap.org/img/wn/${icon}@2x.png`;

const getWeatherData = async (type, city, units = "metric") => {
  const url = `https://api.openweathermap.org/data/2.5/${type}?q=${city}&appid=${API_KEY}&units=${units}`;

  const response = await fetch(url)
    .then((response) => response.json())
    .then((data) => data)
    .catch((err) => console.log(err));

  if (response.cod === "404") {
    return null;
  }

  const {
    weather,
    main: { temp, humidity, feels_like, temp_min, temp_max },
    wind: { speed },
    sys: { sunrise, sunset, country },
    timezone,
    dt,
    name,
    coord: { lon, lat },
  } = response;

  const { description, icon } = weather[0];

  return {
    description,
    icon_url: icon_url(icon),
    temp,
    dt,
    temp_min,
    temp_max,
    sunrise,
    sunset,
    speed,
    humidity,
    feels_like,
    timezone,
    country,
    name,
    lon,
    lat,
  };
};


const forcastWeather = async (type, city, units = "metric") => {
  const url = `https://api.openweathermap.org/data/2.5/${type}?q=${city}&appid=${API_KEY}&units=${units}`;

  const response = await fetch(url)
    .then((response) => response.json())
    .then((data) => data)
    .catch((err) => console.log(err));

  if (response.cod === "404") {
    return null;
  }

  const { list } = response;
  console.log(list);
  const daily = list.filter((item) => item.dt_txt.includes("12:00:00"));
  console.log(daily);
  const dailyData = daily.map((item) => {
    const { dt_txt } = item;
    const { description, icon } = item.weather[0];
    const { temp } = item.main;
    return {
      title: dt_txt.split(" ")[0],
      description,
      icon_url: icon_url(icon),
      temp,
    };
  });
  return dailyData;
};



const formatToLocalTime = (dt, timezone, format = "hh:mm a") => {
  const localTime = DateTime.fromSeconds(dt + timezone);
  return localTime.toFormat(format);
};

export { getWeatherData, forcastWeather, formatToLocalTime };
