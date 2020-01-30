import { Component, OnInit } from '@angular/core';
import { UserService } from './shared/components/user/user.service';
import { CartService } from './cart/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'homedepot01';

  constructor(
    private userService: UserService,
    private cartService:CartService
  ) {
    localStorage.removeItem('breadcrumbs')
    let breadcrumbs = [{ breadcrumb: 'Home', url: '/home' }];
    localStorage.setItem('breadcrumbs', JSON.stringify(breadcrumbs))  
  }

  ngOnInit() {
    this.restoreDataFromLocalStorage();    
  }

  private restoreDataFromLocalStorage() {
    if (localStorage.user) {
      this.userService.restoreUser();
    }
    if(localStorage.cart) {
      this.cartService.restoreCartFromLocalStorage();
    }
  }
}
