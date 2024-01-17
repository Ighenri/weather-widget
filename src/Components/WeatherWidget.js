import React, { useEffect, useState } from "react";
import "./index.css";
import axios from "axios";
import { ReactComponent as MoonSvg } from "../Assets/Svgs/dark_mode_FILL1_wght400_GRAD0_opsz24.svg";
import { ReactComponent as CloundSvg } from "../Assets/Svgs/cloud_FILL1_wght400_GRAD0_opsz24.svg";

const WeatherWidget = ({ location }) => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    if (location.length) {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=edc77ed54f4e82e341af2902d9068fea&units=metric`
        )
        .then((response) => {
          setWeatherData(response.data);
        })
        .catch((error) => {
          console.error("error: ", error);
        });
    }
  }, [location]);

  if (!weatherData) return <div>Loading ...</div>;
  const currentTimeUTC = new Date().getTime() / 1000;
  const localTime = currentTimeUTC + weatherData.timezone;
  const isDayTime =
    localTime > weatherData.sys.sunrise && localTime < weatherData.sys.sunset;
  const cloudSize = weatherData.clouds.all;

  return (
    <div className="weather-widget">
      {isDayTime ? <div className="sun"></div> : <MoonSvg className="moon" />}
      {/* <div className="sun"></div> */}
      <div className="cloud-container">
        {cloudSize > 50 && <CloundSvg className="cloud" />}
      </div>
      <div className="temperature">{Math.round(weatherData.main.temp)}°</div>
      <div className="weather">{weatherData.weather[0].main}</div>
      <div className="low-high">
        {Math.round(weatherData.main.temp_min)}° /{" "}
        {Math.round(weatherData.main.temp_max)}°
      </div>
      <div className="feels-like">
        feels-like: {Math.round(weatherData.main.feels_like)}°
      </div>
      <div className="location">{weatherData.name}</div>
      <div className="humidity">Humidity: {weatherData.main.humidity}</div>
    </div>
  );
};

export default WeatherWidget;
