const API_KEY = 'cf7babd6dce9864e065b950e8bf95fe8';
const ROOT_URL = 'https://api.openweathermap.org/data/2.5/forecast?appid={$API_KEY}';

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;

  return {
    type: FETCH_WEATHER
  }
    
}