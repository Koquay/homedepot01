import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: {breadcrumb: 'Home'}
  },
  {
    path: 'brand',
    loadChildren: './brand/brand.module#BrandModule'
  },
  {
    path: 'appliances',
    loadChildren: './appliances/appliances.module#AppliancesModule'
  },
  {
    path: 'cart',
    loadChildren: './cart/cart.module#CartModule'
  },
  {
    path: 'selected-product',
    loadChildren: './selected-product/selected-product.module#SelectedProductModule'
  },
  {
    path: 'checkout',
    loadChildren: './checkout/checkout.module#CheckoutModule'
  },
  {
    path: '', pathMatch: 'prefix', redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
