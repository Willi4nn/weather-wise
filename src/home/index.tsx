import axios, { AxiosError } from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import InputText from '../components/InputText';
import WeatherInfo from '../components/weatherInfo';
import { WeatherData } from '../models/weatherData';
import { THEME } from '../theme';
import { styles } from './styles';

const API_KEY = process.env.EXPO_PUBLIC_OPENWEATHER_API_KEY;
const DEFAULT_CITY = 'Patos de Minas';

export default function Home() {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const getErrorMessage = (err: AxiosError): string => {
    if (err.response?.status === 404) return 'Cidade não encontrada';
    if (err.response?.status === 401) return 'Erro de autenticação';
    if (err.response?.status === 429) return 'Muitas requisições. Aguarde.';
    if (err.code === 'ECONNABORTED') return 'Tempo esgotado. Verifique sua internet.';
    if (err.code === 'ERR_NETWORK') return 'Erro de rede. Verifique sua conexão.';
    return 'Erro ao buscar dados do clima';
  };

  const fetchWeather = useCallback(async (city: string) => {
    if (!city.trim()) return setError('Digite o nome de uma cidade');
    if (!API_KEY) return setError('API não configurada');

    setLoading(true);
    setError(null);

    try {
      const { data } = await axios.get<WeatherData>(
        'https://api.openweathermap.org/data/2.5/weather',
        {
          params: { q: city.trim(), appid: API_KEY, units: 'metric', lang: 'pt_br' },
          timeout: 10000
        }
      );
      setWeatherData(data);
    } catch (err) {
      setError(getErrorMessage(err as AxiosError));
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchWeather(DEFAULT_CITY);
  }, [fetchWeather]);

  return (
    <View style={styles.container}>
      <InputText fetchWeather={fetchWeather} />

      {loading && (
        <View style={styles.centerContainer}>
          <ActivityIndicator size="large" color={THEME.COLORS.PURPLE} />
          <Text style={styles.feedbackText}>Buscando dados...</Text>
        </View>
      )}

      {error && !loading && (
        <View style={styles.centerContainer}>
          <Text style={styles.errorText}>{error}</Text>
        </View>
      )}

      {weatherData && !loading && <WeatherInfo weatherData={weatherData} />}
    </View>
  );
}