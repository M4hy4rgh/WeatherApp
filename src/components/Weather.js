import moment from "moment";

const API_BASE_URL = "https://api.openweathermap.org/data/2.5";
const getIconUrl = (icon) => `https://openweathermap.org/img/wn/${icon}@2x.png`;

/**
 * Fetches data from the OpenWeatherMap API
 * @param {string} endpoint - API endpoint
 * @param {string} city - City name
 * @param {Object} options - Additional options
 * @returns {Promise<Object|null>} - API response or null on error
 */
async function fetchWeatherData(endpoint, city, options = {}) {
    const { units = "metric", apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY || "" } =
        options;

    if (!apiKey) {
        console.error("API key is required");
        return null;
    }

    const url = `${API_BASE_URL}/${endpoint}?q=${encodeURIComponent(
        city
    )}&appid=${apiKey}&units=${units}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (!response.ok || data.cod === "404" || data.cod === 404) {
            console.error(
                `Weather API error: ${data.message || "City not found"}`
            );
            return null;
        }

        return data;
    } catch (error) {
        console.error("Failed to fetch weather data:", error);
        return null;
    }
}

/**
 * Gets current weather data for a city
 * @param {string} city - City name
 * @param {string} units - Units (metric or imperial)
 * @returns {Promise<Object|null>} - Processed weather data
 */
async function getCurrentWeather(city, units = "metric") {
    const data = await fetchWeatherData("weather", city, { units });

    if (!data) return null;

    try {
        const {
            weather,
            main: { temp, humidity, feels_like, temp_min, temp_max },
            wind: { speed },
            sys: { sunrise, sunset, country },
            timezone,
            dt,
            name,
            coord: { lon, lat },
        } = data;

        const { description, icon } = weather[0] || {};

        return {
            description,
            icon_url: getIconUrl(icon),
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
    } catch (error) {
        console.error("Error processing weather data:", error);
        return null;
    }
}

/**
 * Gets forecast weather data for a city
 * @param {string} city - City name
 * @param {string} units - Units (metric or imperial)
 * @returns {Promise<Array|null>} - Array of daily forecast data
 */
async function getForecastWeather(city, units = "metric") {
    const data = await fetchWeatherData("forecast", city, { units });

    if (!data) return null;

    try {
        const { list = [] } = data;
        const dailyForecasts = list.filter((item) =>
            item.dt_txt?.includes("12:00:00")
        );

        return dailyForecasts.map((item) => {
            const { dt_txt } = item;
            const { description, icon } = item.weather[0] || {};
            const { temp } = item.main || {};

            return {
                title: dt_txt?.split(" ")[0] || "",
                description,
                icon_url: getIconUrl(icon),
                temp,
            };
        });
    } catch (error) {
        console.error("Error processing forecast data:", error);
        return null;
    }
}

/**
 * Formats Unix timestamp to local time
 * @param {number} unixTimestamp - Unix timestamp
 * @param {number} timezone - Timezone offset in seconds
 * @param {string} format - Format string
 * @returns {string} - Formatted time string
 */
function formatToLocalTime(unixTimestamp, timezone, format = "hh:mm A") {
    if (!unixTimestamp) return "";
    try {
        const utcTime = moment.utc(unixTimestamp * 1000);
        const localTime = utcTime.add(timezone, "seconds");

        return localTime.format(format);
    } catch (error) {
        console.error("Error formatting time:", error);
        return "";
    }
}

export { getCurrentWeather, getForecastWeather, formatToLocalTime, getIconUrl };
