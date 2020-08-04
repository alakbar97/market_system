import { FILTER, ADD_BASKER, PROCEED } from './types';

export const filter = (category) => ({
    type: FILTER,
    payload: {
        category
    }
});

export const addToBasket = (id) => ({
    type: ADD_BASKER,
    payload: {
        id
    }
});

export const proceed = (array) => ({
    type: PROCEED,
    payload: {
        array
    }
});