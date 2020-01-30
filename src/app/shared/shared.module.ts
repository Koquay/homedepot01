import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { SharedRoutingModule } from './shared-routing.module';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { PercentSaved } from './pipes/percent-saved';
import { MessageComponent } from './message/message.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';


@NgModule({
  declarations: [
    FooterComponent, 
    HeaderComponent, 
    PercentSaved, 
    MessageComponent,
    BreadcrumbComponent
  ],
  exports: [
    FooterComponent, 
    HeaderComponent, 
    PercentSaved, 
    MessageComponent,
    BreadcrumbComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    FormsModule
  ]
})
export class SharedModule { }
