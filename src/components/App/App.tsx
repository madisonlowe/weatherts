import "./App.css";
import Input from "../Input/Input";
import Geolocator from "../Geolocator/Geolocator";
import Weather from "../Weather/Weather";
import { useState } from "react";

interface cityType {
  name: string;
  lat: number;
  lon: number;
  country: string;
  state?: string;
}

function App() {
  const [geolocatorData, setGeolocatorData] = useState<cityType[]>([
    {
      name: "London",
      lat: 51.5085,
      lon: -0.1257,
      country: "GB",
    },
    {
      name: "London",
      lat: 42.9834,
      lon: -81.233,
      country: "CA",
    },
    {
      name: "London",
      lat: 39.8865,
      lon: -83.4483,
      country: "US",
      state: "OH",
    },
    {
      name: "London",
      lat: 37.129,
      lon: -84.0833,
      country: "US",
      state: "KY",
    },
    {
      name: "London",
      lat: 36.4761,
      lon: -119.4432,
      country: "US",
      state: "CA",
    },
  ]);
  const [latlon, setLatlon] = useState<number[]>([51.5085, -0.1257]);

  return (
    <main className="App">
      <h1>this is our weather app tee hee</h1>
      <Input setGeolocatorData={setGeolocatorData} />
      <Geolocator geolocatorData={geolocatorData} setLatlon={setLatlon} />
      <Weather latlon={latlon} />
    </main>
  );
}

export default App;
