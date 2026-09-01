import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5',
  params: {
    appid: process.env.EXPO_PUBLIC_OPENWEATHER_API_KEY,
    units: 'metric',
    lang: 'pt_br',
  },
  timeout: 10000,
});
