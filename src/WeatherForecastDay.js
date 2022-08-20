import React from "react";
import WeatherIcon from "./Weathericon";

export default function WeatherForecastDay(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="day">{day()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={50} />
      <div className="text-center">
        <span className="tempMax">{Math.round(props.data.temp.min)}°</span>
        <span className="tempMin">{Math.round(props.data.temp.max)}°</span>
      </div>
    </div>
  );
}
