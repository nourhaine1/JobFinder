import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobRoutingModule } from './job-routing.module';
import { JobAddComponent } from './job-add/job-add.component';
import { JobListComponent } from './job-list/job-list.component';
import { CompanyListComponent } from '../company/company-list/company-list.component';

import { FindJobComponent } from './find-job/find-job.component';
import { DetailsJobComponent } from './details-job/details-job.component';
import { JobPostedComponent } from './job-posted/job-posted.component';
import { PostuledJobComponent } from './postuled-job/postuled-job.component';


@NgModule({
  declarations: [
    JobAddComponent,
    JobListComponent

    FindJobComponent,
    DetailsJobComponent,
    JobPostedComponent,
    PostuledJobComponent
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
