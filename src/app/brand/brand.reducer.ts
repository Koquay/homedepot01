import { ADD_PRODUCTS } from '../reducers/types'

const initialState = {
    products: []
}

export const BrandReducer = (state=initialState, action) => {
    switch(action.type) {
        case ADD_PRODUCTS:
            return {
                ...state,
                products: action.payload
            }

        default:
            return state;
    }
}