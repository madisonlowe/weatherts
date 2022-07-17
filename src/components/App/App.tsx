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
  ]);
  const [latlon, setLatlon] = useState<number[]>([51.5085, -0.1257]);

  return (
    <main className="App">
      <h1>Weather App</h1>
      <Input setGeolocatorData={setGeolocatorData} />
      <Geolocator geolocatorData={geolocatorData} setLatlon={setLatlon} />
      <Weather latlon={latlon} />
    </main>
  );
}

export default App;
