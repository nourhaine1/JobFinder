import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { CompanyListComponent } from './company-list/company-list.component';


@NgModule({
  declarations: [
    CompanyListComponent
  ],
  imports: [
    CommonModule,
    CompanyRoutingModule
  ],
  exports:[
    CompanyListComponent
  ]
})
export class CompanyModule { }
