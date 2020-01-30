import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Types } from '../reducers/types';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(
    private store: Store<any>,
  ) { }

  public restoreCartFromLocalStorage = () => {
    let cart = JSON.parse(localStorage.getItem('cart'));

    if (cart) {
      this.store.dispatch({
        type: Types.RESTORE_CART,
        payload: cart
      })
    }
  }
}
