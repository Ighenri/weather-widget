import React from "react";
import "./index.css";
import axios from "axios";
import { ReactComponent as MoonSvg } from "../Assets/Svgs/dark_mode_FILL1_wght400_GRAD0_opsz24.svg";
import { ReactComponent as CloundSvg } from "../Assets/Svgs/cloud_FILL1_wght400_GRAD0_opsz24.svg";

const WeatherWidget = () => {
  return (
    <div className="weather-widget">
      <MoonSvg className="moon" />
      <div className="cloud-container">
        <CloundSvg className="cloud" />
      </div>
      <div className="temperature">Temperature</div>
      <div className="weather">weather</div>
      <div className="low-high">low-high</div>
      <div className="feels-like">feels-like</div>
      <div className="location">location</div>
      <div className="humidity">humidity</div>
    </div>
  );
};

export default WeatherWidget;
