import axios from 'axios';

const WEATHER_API_KEY = 'cf7babd6dce9864e065b950e8bf95fe8';
const WEATHER_ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${WEATHER_API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';

// const GOOGLE_MAPS_API_KEY = 'AIzaSyBWcygPzYfYHFWoq5YOto-EB0wLsaO0z2c';
// const WEATHER_ROOT_URL = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}`;


export function fetchWeather(city) {
  const url = `${WEATHER_ROOT_URL}&q=${city},us`;
  const request = axios.get(url);
  
  return {
    type: FETCH_WEATHER,
    payload: request
  }
    
}

