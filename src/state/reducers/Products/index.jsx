import { FILTER, ADD_BASKER, PROCEED } from './types';
import { product, addToBasket, submit } from '../../../data/products';

export const productsState = {
    products: product,
    basket: []
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

        case ADD_BASKER:
            const arrayItems = addToBasket(payload.id);
            if (arrayItems && !state.basket.includes(arrayItems))
                return {
                    ...state,
                    basket: [...state.basket, arrayItems]
                }
            else {
                alert('it is already added to basket');
                return state;
            }

        case PROCEED:
            const newProductArray = submit(payload.array);
            if (newProductArray.length)
                return {
                    ...state,
                    basket: [],
                    products: newProductArray
                }
            else
                return state;

        default:
            return state;
    }
}