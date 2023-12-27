import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobRoutingModule } from './job-routing.module';
import { JobAddComponent } from './job-add/job-add.component';
import { FindJobComponent } from './find-job/find-job.component';


@NgModule({
  declarations: [
    JobAddComponent,
    FindJobComponent
  ],
  imports: [
    CommonModule,
    JobRoutingModule
  ]
})
export class JobModule { }
