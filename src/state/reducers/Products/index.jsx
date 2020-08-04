import { FILTER } from './types';
import { product } from '../../../data/products';

export const productsState = {
    products: product
};

export default (state = productsState, { type, payload }) => {
    switch (type) {
        case FILTER:
            let filteredProducts = null;
            if (payload.category)
                filteredProducts = product.filter(item => item.category === payload.category);
            else
                filteredProducts = product
            return {
                ...state,
                products: filteredProducts
            }

        default:
            return state;
    }
}