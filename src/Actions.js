// src/actions.js
import axios from 'axios';

export const setBeers = (beers) => ({
    type: 'SET_BEERS',
    payload: beers,
});

export const fetchBeers = (page, perPage) => async (dispatch) => {
    try {
        const response = await axios.get(`https://api.punkapi.com/v2/beers?page=${page}&per_page=${perPage}`);
        dispatch(setBeers(response.data));
    } catch (error) {
        console.error('Error fetching beers:', error);
    }
};
