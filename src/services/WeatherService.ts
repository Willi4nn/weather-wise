import { AxiosError } from 'axios';
import { api } from '../api/client';
import { Weather } from '../domain/models/Weather';
import formatTime from '../libs/format-time';
import formatVisibility from '../libs/format-visibility';

export class WeatherService {
  static async getWeatherByCity(
    city: string,
    signal?: AbortSignal
  ): Promise<Weather> {
    try {
      const { data } = await api.get('/weather', {
        params: { q: city.trim() },
        signal,
      });
      return this.mapToDomain(data);
    } catch (error) {
      if (
        (error as any).name === 'CanceledError' ||
        (error as any).code === 'ERR_CANCELED'
      ) {
        throw new Error('Canceled');
      }
      throw new Error(this.handleError(error as AxiosError));
    }
  }

  private static mapToDomain(data: any): Weather {
    return {
      city: data.name,
      country: data.sys.country,
      temp: Math.round(data.main.temp),
      feelsLike: Math.round(data.main.feels_like),
      tempMin: Math.round(data.main.temp_min),
      tempMax: Math.round(data.main.temp_max),
      description:
        data.weather[0].description.charAt(0).toUpperCase() +
        data.weather[0].description.slice(1),
      iconUri: `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`,
      iconCode: data.weather[0].icon,
      humidity: data.main.humidity,
      windSpeed: data.wind.speed,
      visibility: formatVisibility(data.visibility),
      pressure: data.main.pressure,
      clouds: data.clouds.all,
      sunrise: formatTime(data.sys.sunrise),
      sunset: formatTime(data.sys.sunset),
    };
  }

  private static handleError(error: AxiosError): string {
    if (error.response?.status === 404) return 'Cidade não encontrada.';
    if (error.response?.status === 401) return 'Erro de autenticação na API.';
    if (error.response?.status === 429)
      return 'Muitas requisições. Aguarde um momento.';
    if (error.code === 'ECONNABORTED')
      return 'Tempo esgotado. Verifique sua conexão.';
    return 'Não foi possível buscar os dados meteorológicos.';
  }
}
