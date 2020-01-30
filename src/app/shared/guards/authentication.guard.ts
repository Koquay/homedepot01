import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { MessageService } from '../message/message.service';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {

  constructor(
    private messageService:MessageService
  ) { }

  canActivate() {
    const user = JSON.parse(localStorage.getItem('user'));

    if(user) {
      return true;
    }

    const error = {message: 'You must be logged in to proceed.', status:300};
    this.messageService.handleError(new HttpErrorResponse({error:error}));
    return false;
  }
}
