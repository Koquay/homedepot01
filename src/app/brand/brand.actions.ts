import { Action } from "@ngrx/store";

export enum ProductsActionTypes {
    ADD_PRODUCTS = "ADD_PRODUCTS",
}

export class AddProductsAction implements Action {
    readonly type = ProductsActionTypes.ADD_PRODUCTS;

    constructor(
        public products: []
    ) {}
}

export type ProductsActionUnion = AddProductsAction;