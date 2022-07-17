import React, { useState } from "react";

interface cityType {
  name: string;
  lat: number;
  lon: number;
  country: string;
  state?: string;
}

type InputProps = {
  setGeolocatorData: (cities: cityType[]) => void;
};

export default function Input({ setGeolocatorData }: InputProps) {
  const [text, setText] = useState("");

  function updateText(event: React.ChangeEvent<HTMLInputElement>) {
    setText(event.target.value);
  }

  async function getWeather() {
    const response = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${text}&limit=5&appid=${process.env.REACT_APP_API_KEY}`
    );
    const data = await response.json();
    setGeolocatorData(data);
    console.log(data);
  }

  return (
    <React.Fragment>
      <input
        type="text"
        value={text}
        placeholder="Enter City Name"
        onChange={updateText}
        id="search-bar"
      ></input>
      <br />
      <button onClick={getWeather} className="search-btn" name="searchButton">
        Search
      </button>
    </React.Fragment>
  );
}
