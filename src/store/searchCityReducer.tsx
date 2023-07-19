import ISearchedCity from "../interfaces/ISearchedCity";

// Przykładowy reducer
const initialState: ISearchedCity = {
    city: 'warsaw'
};

const searchCityReducer = (state = initialState, action: any) => {
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