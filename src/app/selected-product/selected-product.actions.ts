import { Action } from "@ngrx/store";
import { ADD_TO_CART } from '../reducers/types';

enum SelectedProductActionTypes {
    ADD_TO_CART = "ADD_TO_CART"
}

export class AddToCartAction implements Action {
    // type: SelectedProductActionTypes.ADD_TO_CART;
    // type: ADD_TO_CART;
    type

    constructor(
        public product: {},
        public quantity=1,
        type
    ) {
        this.type = type;
    }
}

export type CartActionUnion = AddToCartAction;