import { createStore } from 'redux';
import currentWeatherReducer from './currentWeatherReducer';

const store = createStore(currentWeatherReducer);

export default store;