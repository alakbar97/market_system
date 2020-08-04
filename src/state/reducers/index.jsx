import { combineReducers } from 'redux';
import user from './Auth';
import product from './Products';

export default combineReducers({
    user,
    product
});