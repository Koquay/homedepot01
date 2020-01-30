import { Component, OnInit } from '@angular/core';
import { Order, Delivery, Payment } from '../shared/models/data-model';
import { Store } from '@ngrx/store';
import { GET_CART } from '../reducers/types';
import { CheckoutService } from './checkout.service';
import { OrderService } from '../order/order.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  private delivery:Delivery;
  private payment:Payment;
  private citiesStates;
  private expMonths;
  private expYears;
  private cartItems;
  private cartSummary;
  
  constructor(
    private store: Store<any>,
    private orderService:OrderService
  ) {
    this.delivery = new Delivery();
    this.payment = new Payment();    
   }

  ngOnInit() {
    this.getCheckoutStaticData();
    this.getCart();
  }

  private getCart() {
    this.store.dispatch({
      type: GET_CART,
    });

    let cart$ = this.store.select('cart');

    cart$.subscribe(data => {
      this.cartItems = data.cartItems;
      this.cartSummary = data.summary;

      console.log('data', data)
      console.log('cartItems', this.cartItems)
      console.log('cartSummary', this.cartSummary)
    })
  }

  private getCheckoutStaticData() {
    let staticData$ = this.store.select('checkout');

    staticData$.subscribe(data => {
      console.log('static data', data)
      this.citiesStates = data.citiesStates;
      this.expMonths = data.expMonths;
      this.expYears = data.expYears;      
    })
  }

  private placeOrder() {
    console.log('delivery', this.delivery)
    console.log('payment', this.payment)    

    this.orderService.placeOrder(this.delivery, this.payment, this.cartItems).subscribe();
  }

}
