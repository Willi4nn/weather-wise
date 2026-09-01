import { useCallback, useRef, useState } from 'react';
import { Weather } from '../domain/models/Weather';
import { WeatherService } from '../services/WeatherService';

export function useWeather() {
  const [weather, setWeather] = useState<Weather | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const abortControllerRef = useRef<AbortController | null>(null);

  const fetchWeather = useCallback(async (city: string) => {
    if (!city.trim()) {
      setError('Digite o nome de uma cidade.');
      return;
    }

    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    const controller = new AbortController();
    abortControllerRef.current = controller;

    setIsLoading(true);
    setError(null);

    try {
      const data = await WeatherService.getWeatherByCity(
        city,
        controller.signal
      );
      setWeather(data);
    } catch (err: any) {
      if (err.message === 'Canceled') return;
      setError(err instanceof Error ? err.message : 'Erro desconhecido');
      setWeather(null);
    } finally {
      if (abortControllerRef.current === controller) {
        setIsLoading(false);
      }
    }
  }, []);

  return { weather, isLoading, error, fetchWeather };
}
