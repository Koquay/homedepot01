import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SelectedProductRoutingModule } from './selected-product-routing.module';
import { SelectedProductComponent } from './selected-product.component';
import { SharedModule } from '../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [SelectedProductComponent],
  imports: [
    CommonModule,
    SelectedProductRoutingModule,
    SharedModule,
    NgbModule
  ]
})
export class SelectedProductModule { }
