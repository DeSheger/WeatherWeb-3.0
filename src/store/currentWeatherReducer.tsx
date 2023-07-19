import ICurrentWeather from "../interfaces/ICurrentWeather";

const initialState: ICurrentWeather = {
    image: 'EMPTY',
    weather: 'EMPTY',
    temp: 'EMPTY',
    wind: 'EMPTY',
};

const currentWeatherReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'CHANGE_WEATHER':
            return {
                ...state,
                image: action.payload.image,
                weather: action.payload.weather,
                temp: action.payload.temp,
                wind: action.payload.wind,
            };
        case 'RESET_WEATHER':
            return {
                ...state,
                image: 'EMPTY',
                weather: 'EMPTY',
                temp: 'EMPTY',
                wind: 'EMPTY',
            };
        default:
            return state;
    }
}

export default currentWeatherReducer;