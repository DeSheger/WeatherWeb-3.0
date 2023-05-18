// Przykładowy reducer
const initialState = {
    image: 'EMPTY',
    weather: 'EMPTY',
    temp: 'EMPTY',
    wind: 'EMPTY',
};

function currentWeatherReducer(state = initialState, action: any) {
    switch (action.type) {
        case 'CHANGE':
            return {
                ...state,
                image: action.payload.image,
                weather: action.payload.weather,
                temp: action.payload.temp,
                wind: action.payload.wind,
            };
        case 'RESET':
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