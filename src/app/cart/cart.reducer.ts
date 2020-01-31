import { CartActionUnion, CartActionTypes } from './cart.actions';

const initialState = {
    cartItems: [],
    summary: {
        subtotal: 0,
        tax: 0,
        discount: 0,
        total: 0,
    }
}

export const CartReducer = (state = initialState, action: CartActionUnion) => {
    switch (action.type) {
        case CartActionTypes.ADD_TO_CART:
            return {
                ...state,
                cartItems: [...state.cartItems, { product: action.product, quantity: action.quantity }]
            }

        case CartActionTypes.GET_CART:
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

        case CartActionTypes.RESTORE_CART:
            return {
                ...state,
                ...action.cart
            }

        case CartActionTypes.REMOVE_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.filter(item => item.product._id !== action.id)
            }

        default:
            return state;
    }
}