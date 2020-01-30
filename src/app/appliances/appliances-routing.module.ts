import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppliancesComponent } from './appliances.component';
import { AuthenticationGuard } from "../shared/guards/authentication.guard";


const routes: Routes = [
  {
    path: '',
    component: AppliancesComponent,
    canActivate: [AuthenticationGuard],
    data: { breadcrumb: 'Appliances'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppliancesRoutingModule { }
