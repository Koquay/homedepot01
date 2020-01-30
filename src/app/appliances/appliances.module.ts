import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppliancesRoutingModule } from './appliances-routing.module';
import { AppliancesComponent } from './appliances.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [AppliancesComponent],
  imports: [
    CommonModule,
    AppliancesRoutingModule,
    SharedModule
  ]
})
export class AppliancesModule { }
