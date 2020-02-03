import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Types } from '../reducers/types';
import { RestoreCartAction, CartActionTypes } from './cart.actions';

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
      this.store.dispatch(new RestoreCartAction(cart))
    }
  }
}
