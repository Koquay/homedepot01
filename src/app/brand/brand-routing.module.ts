import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrandComponent } from './brand.component';
import { AuthenticationGuard } from '../shared/guards/authentication.guard';


const routes: Routes = [
  {
    path: ':brand',
    component: BrandComponent,
    // canActivate: [AuthenticationGuard],
    data: {breadcrumb: 'Brand'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BrandRoutingModule { }
