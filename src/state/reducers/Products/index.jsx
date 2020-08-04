import { FILTER } from './types';
import { product } from '../../../data/products';

export const productsState = {
    products:product
};

export default (state = productsState, { type, payload }) => {
    switch (type) {
        case FILTER:
            const filteredProducts = product.filter(item => item.category === payload.category);
            return {
                ...state,
                products: filteredProducts
            }

        default:
            return state;
    }
}