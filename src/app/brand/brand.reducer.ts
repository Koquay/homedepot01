import { ProductsActionTypes } from './brand.actions';


const initialState = {
    products: []
}

export const BrandReducer = (state=initialState, action) => {
    switch(action.type) {
        case ProductsActionTypes.ADD_PRODUCTS:
            return {
                ...state,
                products: action.products
            }

        default:
            return state;
    }
}