import { Injectable } from '@angular/core';
import { User } from '../../models/data-model';
import { HttpClient } from '@angular/common/http';
import { tap, catchError } from "rxjs/operators";
import { timer } from 'rxjs';
import { Router } from '@angular/router';
import { MessageService } from '../../message/message.service';
import { Types } from 'src/app/reducers/types';
import { Store } from '@ngrx/store';
import { SetCurrentUserAction, UserActionTypes, LogoutUserAction } from './user.actions';
import { ClearCartAction, CartActionTypes } from 'src/app/cart/cart.actions';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userUrl = '/api/user/';
  public isLoggedIn = false;
  public user;

  constructor(
    private store: Store<any>,
    private httpClient: HttpClient,
    private router: Router,
    private messageService: MessageService
  ) { }

  public signIn(user: User) {
    return this.httpClient.post(this.userUrl, user).pipe(
      tap(user => {
        console.log('user', user);
        this.saveUser(user);
        this.startloginTimer();
        this.messageService.sendSuccess('Log In Successful');
        return user;
      }),
      catchError(error => {
        console.log('error', error);
        this.messageService.handleError(error);
        throw error;
      })
    )
  }

  private startloginTimer() {
    const source = timer(3600000);

    const subscribe = source.subscribe(val => {
      this.signOut();
    })
  }

  private saveUser = (user) => {
    user.isLoggedIn = true;

    this.store.dispatch(new SetCurrentUserAction(user))

    this.isLoggedIn = true;
    this.user = user;

    localStorage.setItem('user', JSON.stringify(user));
  }

  public restoreUser = () => {
    let user = JSON.parse(localStorage.getItem('user'));
    this.saveUser(user);
    this.startloginTimer();
  }

  public signOut = () => {
    this.store.dispatch({
      type: Types.LOGOUT_CURRENT_USER
    });

    this.store.dispatch(new LogoutUserAction())
    this.store.dispatch(new ClearCartAction())

    localStorage.removeItem('user');
    localStorage.removeItem('cart');
    localStorage.removeItem('product');
    this.isLoggedIn = false;
    this.user = null;
    this.router.navigate(['/home'])
  }

}
