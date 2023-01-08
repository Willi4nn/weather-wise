export interface WeatherData {
  name: string;
  visibility: number;
  weather: [
    {
      icon: string;
      description: string;
    }
  ];
  main: {
    temp: number;
    humidity: number;
    feels_like: number;
  };
  wind: {
    speed: number;
  };
  sys: {
    sunrise: number;
    sunset: number;
  };
}
