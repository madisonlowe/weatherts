interface cityType {
  name: string;
  lat: number;
  lon: number;
  country: string;
  state?: string;
}

type GeolocatorProps = {
  geolocatorData: cityType[];
  setLatlon: (latlon: number[]) => void;
};

export default function Geolocator({
  geolocatorData,
  setLatlon,
}: GeolocatorProps) {
  return (
    <div>
      {geolocatorData.map((city) => (
        <div key={`${city.lat}${city.lon}`} style={{ border: "solid 1px red" }}>
          <p>City: {city.name}</p>
          <p>Latitude: {city.lat}</p>
          <p>Longitude: {city.lon}</p>
          <p>Country: {city.country}</p>
          {city.state && <p>State: {city.state}</p>}
          <button
            onClick={() => {
              setLatlon([city.lat, city.lon]);
            }}
          >
            See Weather
          </button>
        </div>
      ))}
    </div>
  );
}
