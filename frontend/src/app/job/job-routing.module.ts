import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FindJobComponent } from './find-job/find-job.component';

const routes: Routes = [
  {path:"findjob",component:FindJobComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobRoutingModule { }
