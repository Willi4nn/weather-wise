import { ActivityIndicator, View } from 'react-native';
import { useEffect, useState } from 'react';
import WeatherInfo from '../components/weatherInfo';
import InputText from '../components/InputText';
import { WeatherData } from '.././models/WeatherData';
import { styles } from './styles';
import axios from 'axios';

const apiKey = 'f675262db7bdd6ff21ae8fc90244ef6c';

export default function Home() {
  const [weatherData, setWeatherData] = useState<WeatherData[]>([]);
  const [loaded, setLoaded] = useState(false);

  const fetchWeather = async (value: string) => {
    setLoaded(false);
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${apiKey}&units=metric&lang=pt_br`
      );
      if (response.status === 200) {
        setWeatherData(response.data);
      } else {
        setWeatherData([]);
      }
    } catch (error) {
      console.error(error);
    }
    setLoaded(true);
  };

  useEffect(() => {
    fetchWeather('Patos de Minas');
  }, []);

  if (!loaded || weatherData === null) {
    return (
      <View style={styles.container}>
        <InputText fetchWeather={fetchWeather} />
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <InputText fetchWeather={fetchWeather} />
      <WeatherInfo weatherData={weatherData} />
    </View>
  );
}
