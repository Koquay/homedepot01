import { ADD_TO_CART, GET_CART, REMOVE_ITEM, Types } from '../reducers/types';

const initialState = {
    cartItems: [],
    summary: {
        subtotal: 0,
        tax: 0,
        discount: 0,
        total: 0,
    }
}

export const CartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload]
            }
        case GET_CART:
            let newSummary = JSON.parse(JSON.stringify(state.summary))
            newSummary.subtotal = state.cartItems.reduce((sum, item) => {
                return sum + item.product.price * item.quantity;
            }, 0);
            newSummary.discount = newSummary.subtotal * .25;            
            newSummary.tax = newSummary.subtotal * .10;
            newSummary.total = newSummary.subtotal - newSummary.discount + newSummary.tax;
            return {
                ...state,
                summary: newSummary
            };

            case Types.RESTORE_CART:
                return {
                    ...state,
                    ...action.payload
                }

        case REMOVE_ITEM: 
            return {
                ...state,
                cartItems: state.cartItems.filter(item => item.product._id !== action.payload)
            }
        default:
            return state;
    }
}