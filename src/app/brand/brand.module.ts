import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BrandRoutingModule } from './brand-routing.module';
import { BrandComponent } from './brand.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [BrandComponent],
  imports: [
    CommonModule,
    BrandRoutingModule,
    SharedModule,
    NgbModule,
    FormsModule
  ]
})
export class BrandModule { }
