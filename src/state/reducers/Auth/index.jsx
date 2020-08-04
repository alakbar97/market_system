import { LOGIN } from './types';
import { isValidUser } from '../../../data/user';

export const userState = {
    userData: null,
    errorMessage: null
}

export default (state = userState, { type, payload }) => {
    switch (type) {
        case LOGIN:
            const user = isValidUser(payload.userData);
            if (user)
                return {
                    ...state,
                    userData: user,
                    errorMessage: null
                }
            else
                return {
                    ...state,
                    userData: null,
                    errorMessage: 'Email or Password is wrong'
                }


        default:
            return state;
    }
}