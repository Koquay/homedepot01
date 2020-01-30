import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GET_CART, REMOVE_ITEM } from '../reducers/types';
import { CartService } from './cart.service';

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
    this.store.dispatch({
      type: GET_CART,
    });

    let cart$ = this.store.select('cart');

    cart$.subscribe(cart => {
      this.cartItems = cart.cartItems
      this.cartSummary = cart.summary;
      console.log('cart Items', cart.cartItems)
      console.log('cart Summary', cart.summary)
    })
  }

  private removeItem = (id) => {
    this.store.dispatch({
      type: REMOVE_ITEM,
      payload: id
    })

    this.getCartItems();
  }

}
