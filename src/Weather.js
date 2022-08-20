import React, { useState } from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Weathericon from "./Weathericon";
import WeatherTemp from "./WeatherTemp";
import WeatherForecast from "./WeatherForecast";

import axios from "axios";

export default function Weather(props) {
  const [city, setCity] = useState("Somewhere");
  const [weather, setWeather] = useState({
    temp: "18",
    cordlat: "22",
    cordlon: "56",
    wind: "22",
    hum: "33",
    desc: "sunny",
    icon: "01d",
  });

  let dayToday = new Date();
  let timeToday = new Date();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let time;
  if (timeToday.getUTCMinutes() < 10) {
    time = timeToday.getHours() + ":0" + timeToday.getUTCMinutes();
  } else {
    time = timeToday.getHours() + ":" + timeToday.getUTCMinutes();
  }

  function showAlert(event) {
    event.preventDefault();
    let apiKey = "66ed20f111d77bedbe75c776bbb6b187";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    axios.get(url).then(showTemp);
  }
  function myCity(event) {
    setCity(event.target.value);
  }

  function showTemp(response) {
    setWeather({
      temp: Math.round(response.data.main.temp),
      cordlat: response.data.coord.lat,
      cordlon: response.data.coord.lon,
      wind: response.data.wind.speed,
      hum: response.data.main.humidity,
      desc: response.data.weather[0].description,
      date: days[dayToday.getDay()],
      mtime: time,
      icon: response.data.weather[0].icon,
    });
    //console.log(weather.temp);
  }

  let form = (
    <form onSubmit={showAlert}>
      {" "}
      <div className="row">
        <div className="col-8 forminput">
          <input
            onChange={myCity}
            id="cityInput"
            className="form-control"
            placeholder="your city"
            type="search"
            autoComplete="off"
          ></input>
        </div>
        <div className="col-2 formbutton">
          <button type="submit" id="buttonS" className="btn btn-primary myBtn">
            search
          </button>
        </div>
      </div>
    </form>
  );

  return (
    <div className="Weather">
      <div className="wrapper mt-5">
        <div className="container">
          {form}
          <div className="row">
            <div className="col-8">
              last update: <span id="dayToday">{weather.date}</span>{" "}
              <span id="timeToday">{weather.mtime}</span>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row  mt-5">
            <div className="col-8 weatherCur">
              <h1 id="placeToday">{city}</h1>
              <h2>
                <span id="description">{weather.desc}</span>
              </h2>
              <WeatherTemp temp1={weather.temp} />
              <Weathericon code={weather.icon} size={85} />
            </div>
            <div className="col-4 pt-5 myGrey">
              <span id="humidity">Humidity: {weather.hum}%</span>
              <br />
              <span id="wind">Wind: {weather.wind} km/h</span>
            </div>
          </div>
        </div>
        <div className="container mt-5">
          <WeatherForecast
            coordinatesLon={weather.cordlat}
            coordinatesLat={weather.cordlon}
          />
        </div>

        <footer>
          <small>
            This project was coded by{" "}
            <a
              href="https://www.linkedin.com/in/liubov-shupik-46940016b/"
              target="_blank"
              rel="noreferrer"
            >
              Liubov Shupik
            </a>{" "}
            and is{" "}
            <a
              href="https://github.com/fel562/weather-r"
              target="_blank"
              rel="noreferrer"
            >
              open-sourced on GitHub
            </a>{" "}
            and{" "}
            <a
              href="https://github.com/fel562/weather-forecast"
              id="testlink"
              target="_blank"
              rel="noreferrer"
            >
              hosted on Netlify
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
