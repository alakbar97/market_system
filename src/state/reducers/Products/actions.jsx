import { FILTER } from './types';

export const filter = (category) => ({
    type: FILTER,
    payload: {
        category
    }
});