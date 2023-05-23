import { combineReducers, createStore } from 'redux';
import currentWeatherReducer from './currentWeatherReducer';
import searchCityReducer from './searchCityReducer';

const reducers = combineReducers({
    currentWeatherReducer,
    searchCityReducer
  })

const store = createStore(reducers);

export default store;