import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FindJobComponent } from './find-job/find-job.component';
import { DetailsJobComponent } from './details-job/details-job.component';
import { JobPostedComponent } from './job-posted/job-posted.component';

const routes: Routes = [
  {path:"findjob",component:FindJobComponent},
  {path:"jobdetails/:id",component:DetailsJobComponent},
  {path:"jobByUser",component:JobPostedComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobRoutingModule { }
