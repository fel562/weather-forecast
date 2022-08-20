import React, { useState } from "react";
import Weathericon from "./Weathericon";
import axios from "axios";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    console.log(response.data);
    console.log(new Date(response.data.dt * 1000));
    setForecast(response.data.daily);
  }
  function day() {
    let date = new Date();
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }
  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row text-center">
          <div className="col">
            <div className="day">Thu</div>
            <Weathericon code="01d" size={50} />
            <div className="text-center">
              <span className="tempMax">5</span>
              <span className="tempMin">2</span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "dc7180dce8b1f701e2637bca19954d38";
    console.log(props.coordinatesLat);
    console.log(props.coordinatesLon);

    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.coordinatesLat}&lon=${props.coordinatesLon}&appid=${apiKey}&units=metric`;

    axios.get(url).then(handleResponse);
    return null;
  }
}
