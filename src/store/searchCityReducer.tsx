// Przykładowy reducer
const initialState = {
    city: 'warsaw'
};

function searchCityReducer(state = initialState, action: any) {
    switch (action.type) {
        case 'CHANGE':
            return {
                ...state,
                city: action.payload.city
            };
        case 'RESET':
            return {
                ...state,
                city: 'warsaw'
            };
        default:
            return state;
    }
}

export default searchCityReducer;