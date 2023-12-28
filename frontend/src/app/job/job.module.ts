import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobRoutingModule } from './job-routing.module';
import { JobAddComponent } from './job-add/job-add.component';
import { FindJobComponent } from './find-job/find-job.component';
import { DetailsJobComponent } from './details-job/details-job.component';


@NgModule({
  declarations: [
    JobAddComponent,
    FindJobComponent,
    DetailsJobComponent
  ],
  imports: [
    CommonModule,
    JobRoutingModule
  ]
})
export class JobModule { }
