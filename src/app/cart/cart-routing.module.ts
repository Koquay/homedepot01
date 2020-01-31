import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart.component';
import { AuthenticationGuard } from '../shared/guards/authentication.guard';


const routes: Routes = [
  {
    path: '',
    component: CartComponent,
    // canActivate: [AuthenticationGuard],
    data: { breadcrumb: 'Cart'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }
