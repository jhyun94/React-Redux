import { FETCH_WEATHER } from '../actions/index';


export default function Weather(state = [], action){

  switch(action.type){
    case FETCH_WEATHER: 
      return [action.payload.data].concat(state);
  }

  return state;
}