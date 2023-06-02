const initialState = {
    lat: 52.2319581,
    lon: -85.85,
    forecast: [
        { date: '1', weather: 'unknown', temp: 'unknown', img: 'unknown' },
        { date: '2', weather: 'unknown', temp: 'unknown', img: 'unknown' },
        { date: '3', weather: 'unknown', temp: 'unknown', img: 'unknown' },
        { date: '4', weather: 'unknown', temp: 'unknown', img: 'unknown' },
        { date: '5', weather: 'unknown', temp: 'unknown', img: 'unknown' }
    ]
}

function forecastWeatherReducer(state = initialState, action: any) {
    switch (action.type) {
        case 'CHANGE_CORDS':
            return {
                ...state,
                lat: action.payload.lat,
                lon: action.payload.lon
            };
        case 'RESET_CORDS':
            return {
                ...state,
                lat: 52.2319581,
                lon: -85.85
            };
        case 'CHANGE_FORECAST':
            return {
                ...state,
                forecast: action.payload.forecast
            };
        default:
            return state;
    }

}

export default forecastWeatherReducer;
