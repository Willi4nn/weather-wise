import { useCallback, useState } from 'react';
import { Weather } from '../domain/models/Weather';
import { WeatherService } from '../services/WeatherService';

export function useWeather(defaultCity?: string) {
  const [weather, setWeather] = useState<Weather | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchWeather = useCallback(async (city: string) => {
    if (!city.trim()) {
      setError('Digite o nome de uma cidade.');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const data = await WeatherService.getWeatherByCity(city);
      setWeather(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro desconhecido');
      setWeather(null);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { weather, isLoading, error, fetchWeather };
}
