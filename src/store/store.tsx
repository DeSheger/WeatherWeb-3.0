import { combineReducers, createStore } from 'redux';
import currentWeatherReducer from './currentWeatherReducer';
import searchCityReducer from './searchCityReducer';
import forecastWeatherReducer from './forecastWeatherReducer';

const reducers = combineReducers({
    currentWeatherReducer,
    searchCityReducer,
    forecastWeatherReducer
  })

const store = createStore(reducers);

export default store;