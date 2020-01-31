import { Component, OnInit } from '@angular/core';
import { Order, Delivery, Payment } from '../shared/models/data-model';
import { Store } from '@ngrx/store';
import { OrderService } from '../order/order.service';
import { GetCartAction, CartActionTypes } from '../cart/cart.actions';
import { MessageService } from '../shared/message/message.service';

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
    private orderService:OrderService,
    private messageService:MessageService
  ) {
    this.delivery = new Delivery();
    this.payment = new Payment();    
   }

  ngOnInit() {
    this.getCheckoutStaticData();
    this.getCart();
  }

  private getCart() {
    this.store.dispatch(new GetCartAction(CartActionTypes.GET_CART))
  
    const cartSelector =  (state) => {return(state.cart)}

    let cart$ = this.store.select(cartSelector);

    cart$.subscribe(data => {
      this.cartItems = data.cartItems;
      this.cartSummary = data.summary;
    })
  }

  private getCheckoutStaticData() {
    const checkoutSelector =  (state) => {return(state.checkout)}
    let staticData$ = this.store.select(checkoutSelector);

    staticData$.subscribe(data => {
      this.citiesStates = data.citiesStates;
      this.expMonths = data.expMonths;
      this.expYears = data.expYears;      
    })
  }

  private placeOrder() {
    console.log('delivery', this.delivery)
    console.log('payment', this.payment)    

    this.orderService.placeOrder(this.delivery, this.payment, this.cartItems).subscribe(order => {
      this.messageService.sendInfo('Your order was successfully placed.')
    });
  }

}
