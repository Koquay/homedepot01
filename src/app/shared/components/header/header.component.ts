import { Component, OnInit } from '@angular/core';
import { User } from '../../models/data-model';
import { UserService } from '../user/user.service';
import { Store } from '@ngrx/store';
import { distinctUntilChanged, debounceTime } from 'rxjs/operators';
import { Subject, interval } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private user: User;
  private cartItems: [];
  private isLoggedIn = false;
  private overlayDisplayed = false;
  private searchItems;
  private searchResults;
  private showSearchResult = false;
  private marquee;
  private marqueeContents;
  private searchSubject = new Subject();
  private searchField;



  constructor(
    private store: Store<any>,
    private userService: UserService
  ) {
    this.user = new User();
  }

  ngOnInit() {
    this.getCartItems();
    this.getUserLogin();
    this.getHeaderData();
    this.startMarquee();
    this.handleSearch();
  }

  private signIn() {
    this.userService.signIn(this.user).subscribe()
  }

  private getCartItems() {
    const cartSelector =  (state) => {return(state.cart)}
    let cart$ = this.store.select(cartSelector);

    cart$.subscribe(cart => {
      this.cartItems = cart.cartItems
    })
  }

  private signOut() {
    this.userService.signOut();
  }

  private getUserLogin() {
    const userSelector =  (state) => {return(state.user)}
    let user$ = this.store.select(userSelector);

    user$.subscribe(user => {
      this.isLoggedIn = user.user.isLoggedIn;
      console.log('isLoggedIn', this.isLoggedIn)
    })
  }

  private getHeaderData = () => {
    const headerSelector =  (state) => {return(state.header)}
    let header$ = this.store.select(headerSelector);

    header$.subscribe(header => {
      this.searchItems = header.searchItems;
      this.marqueeContents = header.marqueeContents;
    })
  }

  private handleSearch() {
    this.searchSubject.pipe(
      distinctUntilChanged(),
      debounceTime(400)
    ).subscribe(value => {
      if (value) {
        this.search(value)
      }
    });
  }

  search = (value) => {
    this.searchResults = this.searchItems
      .filter(item => item.toLowerCase().includes(value.toLowerCase()))

    if (value) {
      this.showSearchResult = true;
    } else {
      this.showSearchResult = false;
    }
  }

  clearSearchbox = () => {
    this.searchResults = [];
  }

  ngDoCheck() {
    this.searchSubject.next(this.searchField);
  }

  private showOverlay(value) {
    console.log('SHOW OVERLAY')
    this.overlayDisplayed = value;
  }

  private startMarquee() {
    let marqueeInterval = interval(4000);
    let index = 0;

    // this.initMarquee();
    this.marquee = this.marqueeContents[0];

    marqueeInterval.subscribe(() => {
      this.marquee = this.marqueeContents[index++];
      if (index == this.marqueeContents.length) {
        index = 0;
      }
    })
  }

  private initMarquee = () => {
    this.marqueeContents = ['FREE 2-DAY DELIVERY', 'BUY 1 GET 1 FREE'];
    this.marquee = this.marqueeContents[0];
  }
}
