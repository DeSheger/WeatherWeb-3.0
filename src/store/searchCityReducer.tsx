// Przykładowy reducer
const initialState = {
    city: 'warsaw'
};

function searchCityReducer(state = initialState, action: any) {
    switch (action.type) {
        case 'CHANGE_CITY':
            return {
                ...state,
                city: action.payload.city
            };
        case 'RESET_CITY':
            return {
                ...state,
                city: 'warsaw'
            };
        default:
            return state;
    }
}

export default searchCityReducer;