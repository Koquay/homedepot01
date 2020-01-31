import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GET_CART, REMOVE_ITEM } from '../reducers/types';
import { CartService } from './cart.service';
import { GetCartAction, CartActionTypes, RemoveCartAction } from './cart.actions';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  private cartItems: [];
  private cartSummary;

  constructor(
    private store: Store<any>,
    private cartService:CartService
  ) {}

  ngOnInit() {
    this.getCartItems();
  }

  private getCartItems() {
    this.store.dispatch(new GetCartAction(CartActionTypes.GET_CART))
  
    const cartSelector =  (state) => {return(state.cart)}

    let cart$ = this.store.select(cartSelector);

    cart$.subscribe(cart => {
      this.cartItems = cart.cartItems
      this.cartSummary = cart.summary;
    })
  }

  private removeItem = (id) => {
    this.store.dispatch(new RemoveCartAction(id, CartActionTypes.REMOVE_ITEM))

    this.getCartItems();
  }

}
