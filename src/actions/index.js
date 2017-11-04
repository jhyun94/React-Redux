import axios from 'axios';

const API_KEY = '8ffa32e8fde0194fa77a68dded81e683'
const FETCH_WEATHER = 'FETCH_WEATHER';
const ROOT_URL = `http:openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;


export function getWeather(city){

  request = axios(`${ROOT_URL}&q=${city},us`);

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}

