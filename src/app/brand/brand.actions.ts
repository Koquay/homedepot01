import { Action } from "@ngrx/store";

export enum ProductsActionTypes {
    ADD_PRODUCTS = "ADD_PRODUCTS",
}

export class AddProductsAction implements Action {
    type: ProductsActionTypes.ADD_PRODUCTS

    constructor(
        public products: [],
        type
    ) {
        this.type = type;
    }
}

export type ProductsActionUnion = AddProductsAction;