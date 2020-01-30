import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const user = localStorage.getItem('user');

    let token;

    if (user) {
      token = JSON.parse(user).token;
      // console.log('\nRequestInterceptor user token', token)

      if (token) {
        const authReq = req.clone({ setHeaders: { token: token } });
        return next.handle(authReq);
      }
    }

    return next.handle(req)
  }
}
