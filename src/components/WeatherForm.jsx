import React from "react";
import { useState } from "react";

export default function WeatherForm({ onChangeCity }) {
  const [city, setCity] = useState(" ");

  function handleChange(e) {
    const value = e.target.value;
    if (value !== " ") {
      setCity(value);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    onChangeCity(city);
  }

  return (
    <>
      <div>
        <form className="flex justify-center" onSubmit={handleSubmit}>
          <input
            className="p-0.5 bg-slate-100 rounded-sm mt-5 mb-5 capitalize"
            type="text"
            onChange={handleChange}
            autoFocus
          />
        </form>
      </div>
    </>
  );
}
