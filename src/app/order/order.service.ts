import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OrderItem, Order } from '../shared/models/data-model';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private orderUrl = '/api/order';

  constructor(
    private httpClient:HttpClient
  ) { }
  
  public placeOrder = (delivery, payment, cartItems) => {
    const order = this.createOrder(delivery, payment, cartItems);

    return this.httpClient.post(this.orderUrl, order).pipe(
      tap(order => console.log('new order', order))
    )
  }

  private createOrder(delivery, payment, cartItems) {
    let orderItems = [];

    for(let item of cartItems) {
      orderItems.push(new OrderItem(item.product._id, item.quantity))
    }

    let order = new Order(delivery, payment, orderItems);

    console.log('order', order)

    return order;
  }
}
