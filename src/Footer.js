import React from "react";

export default function Footer() {
  return (
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
          href="https://github.com/fel562/weather-forecast"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced on GitHub
        </a>{" "}
        and{" "}
        <a
          href="https://weather-forecast-liubov.netlify.app/"
          id="testlink"
          target="_blank"
          rel="noreferrer"
        >
          hosted on Netlify
        </a>
      </small>
    </footer>
  );
}
