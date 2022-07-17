import { useEffect, useState } from "react";

type WeatherProps = {
  latlon: number[];
};

type weatherObject = {
  clouds: {};
  dt: number;
  dt_txt: string;
  main: {};
  pop: number;
  sys: {};
  visibility: number;
  weather: [{ description: string; icon: string; id: number; main: string }];
  wind: {};
};

export default function Weather({ latlon }: WeatherProps) {
  const [forecast, setForecast] = useState<[]>([]);

  useEffect(() => {
    const url = `http://api.openweathermap.org/data/2.5/forecast?lat=${latlon[0]}&lon=${latlon[1]}&appid=${process.env.REACT_APP_API_KEY}`;
    async function fetchWeather() {
      const response = await fetch(url);
      const data = await response.json();
      setForecast(data.list);
      console.log(data);
    }
    fetchWeather();
  }, [latlon]);

  return (
    <div>
      {forecast.map((value: weatherObject) => (
        <div style={{ border: "solid 1px blue" }}>
          <p>{value.dt_txt}</p>
          <p>{value.weather[0].main}</p>
          <p>{value.weather[0].description}</p>
        </div>
      ))}
    </div>
  );
}
