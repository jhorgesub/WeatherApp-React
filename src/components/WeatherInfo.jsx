import React from "react";
import WeatherCard from "./WeatherCard";

export default function WeatherInfo({ weather }) {
  return (
    <>
    <WeatherCard weather={weather} />    
    </>
  );
}
