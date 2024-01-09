import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobRoutingModule } from './job-routing.module';
import { JobAddComponent } from './job-add/job-add.component';
import { JobListComponent } from './job-list/job-list.component';
import { CompanyListComponent } from '../company/company-list/company-list.component';


@NgModule({
  declarations: [
    JobAddComponent,
    JobListComponent
  ],
  imports: [
    CommonModule,
    JobRoutingModule
  ],
  exports: [
    JobListComponent

  ]
})

export class JobModule { }
