import {
    LOGIN
} from './types';

export const login = (userData) => ({
    type: LOGIN,
    payload: {
        userData
    }
});