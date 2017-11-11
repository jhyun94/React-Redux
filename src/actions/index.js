import axios from 'axios';

export function getWeather(city){
  const API_KEY = '54910d727745b59a701ab94e1b89230d'
  const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

  const request = axios.get(`${ROOT_URL}&q=${city},us`)



  return {
    type: "TEST",
    payload: request
  }
}

