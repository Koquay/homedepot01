import { Action } from "@ngrx/store";

export enum CartActionTypes {
    ADD_TO_CART = "ADD_TO_CART",
    GET_CART = "GET_CART",
    REMOVE_ITEM = "REMOVE_ITEM",
    RESTORE_CART = "RESTORE_CART",
    CLEAR_CART = 'CLEAR_CART'
}

export class AddToCartAction implements Action {
    readonly type = CartActionTypes.ADD_TO_CART

    constructor(
        public product: {},
        public quantity = 1
    ) {}
}

export class GetCartAction implements Action {
    readonly type = CartActionTypes.GET_CART;

    constructor(
        ) {}
}

export class RemoveCartAction implements Action {
    readonly type = CartActionTypes.REMOVE_ITEM;

    constructor(
        public id: String,
        ) {}
}

export class RestoreCartAction implements Action {
    readonly type = CartActionTypes.RESTORE_CART;

    constructor(
        public cart: {},
        ) {}
}

export class ClearCartAction implements Action {
    readonly type = CartActionTypes.CLEAR_CART;

    constructor(
        ) {}
}

export type CartActionUnion = AddToCartAction | GetCartAction | RemoveCartAction
    | RestoreCartAction | ClearCartAction;