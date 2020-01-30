import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { HomeComponent } from './home/home.component';
import { SharedModule } from './shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers';
import { FooterReducer } from './shared/components/footer/redux/footer.reducer';
import { AppliancesReducer } from './appliances/appliances.reducer';
import { BrandReducer } from './brand/brand.reducer';
import { CartReducer } from './cart/cart.reducer';
import { CheckoutReducer } from './checkout/checkout.reducer';
import { RequestInterceptor } from './shared/interceptors/request.interceptor';
import { UserReducer } from './shared/components/user/userReducer';
import { HeaderReducer } from './shared/components/header/header.reducer';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    // StoreModule.forRoot(reducers)
    StoreModule.forRoot({
      footer:FooterReducer,
      appliances: AppliancesReducer,
      brand: BrandReducer,
      cart: CartReducer,
      checkout: CheckoutReducer,
      user: UserReducer,
      header: HeaderReducer
    })
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass:RequestInterceptor, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
