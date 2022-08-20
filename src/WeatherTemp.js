import React, { useState } from "react";

export default function WeatherTemp(props) {
  const [unit, setUnit] = useState("celsius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  if (unit === "celsius") {
    return (
      <span>
        <h3 id="myTemp">{Math.round(props.temp1)}</h3>
        <span className="degree unit">
          °C
          <a href="/" onClick={showFahrenheit}>
            <span className="far">|°F</span>
          </a>
        </span>
      </span>
    );
  } else {
    let fahrenheit = (props.temp1 * 9) / 5 + 32;
    return (
      <span>
        <h3 id="myTemp">{Math.round(fahrenheit)}</h3>
        <span className="degree unit">
          <a href="/" onClick={showCelsius}>
            °C |
          </a>
          °F
        </span>
      </span>
    );
  }
}
