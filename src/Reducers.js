// src/reducers.js
const initialState = {
    beers: [],
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_BEERS':
            return { ...state, beers: action.payload };
        default:
            return state;
    }
};

export default rootReducer;
