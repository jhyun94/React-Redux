import axios from 'axios';

const API_KEY = '54910d727745b59a701ab94e1b89230d'
const FETCH_WEATHER = 'FETCH_WEATHER';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;


export function getWeather(city){

  const url = `${ROOT_URL}&q=${city},us`;
  const request =  axios.get(url);


  return {
    type: FETCH_WEATHER,
    payload: request
  }
}

