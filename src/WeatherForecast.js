import React, { useState, useEffect } from "react";

import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinatesLat, props.coordinatesLon]);

  function handleResponse(response) {
    console.log(response.data);
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    console.log(forecast);
    return (
      <div className="WeatherForecast">
        <div className="row text-center">
          {forecast.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <WeatherForecastDay data={dailyForecast} />
                </div>
              );
            } else return null;
          })}
        </div>
      </div>
    );
  } else {
    let apiKey = "dc7180dce8b1f701e2637bca19954d38";

    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.coordinatesLat}&lon=${props.coordinatesLon}&units=metric&appid=${apiKey}`;
    console.log(url);
    axios.get(url).then(handleResponse);
    return null;
  }
}
