import { Action } from "@ngrx/store";

export enum CartActionTypes {
    ADD_TO_CART = "ADD_TO_CART",
    GET_CART = "GET_CART",
    REMOVE_ITEM = "REMOVE_ITEM",
    RESTORE_CART = "RESTORE_CART",
}

export class AddToCartAction implements Action {
    type: CartActionTypes.ADD_TO_CART

    constructor(
        public product: {},
        public quantity=1,
        type
    ) {
        this.type = type;
    }
}

export class GetCartAction implements Action {
    type: CartActionTypes.GET_CART;

    constructor(
        type
     ) {
         this.type = type;
    }
}

export class RemoveCartAction implements Action {
    type: CartActionTypes.REMOVE_ITEM;

    constructor(
        public id:String,
        type
     ) {
         this.type = type;
    }
}

export class RestoreCartAction implements Action {
    type: CartActionTypes.RESTORE_CART;

    constructor(
        public cart:{},
        type
     ) {
         this.type = type;
    }
}

// export class AddProductsAction implements Action {
//     type: CartActionTypes.ADD_PRODUCTS

//     constructor(
//         public products: [],
//         type
//     ) {
//         this.type = type;
//     }
// }

export type CartActionUnion = AddToCartAction | GetCartAction | RemoveCartAction | RestoreCartAction;