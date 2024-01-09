import { Component } from '@angular/core';
import { Job } from '../model/job';
import { Subscription } from 'rxjs';
import { JobService } from '../service/job.service';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent {
  constructor(private service:JobService){}
  jobs:  Job[]=[];
  subscription? : Subscription;
  companiesFound?:Number
  currentPage = 1;
  companiesPerPage = 5;
  showAddCompanyModal = false;
  getCurrentPageJobs(): any[] {

    const startIndex = (this.currentPage - 1) * this.companiesPerPage;
    const endIndex = startIndex + this.companiesPerPage;
    return this.jobs.slice(startIndex, endIndex);
  }
  changePage(pageNumber: number): void {
    this.currentPage = pageNumber;
  }
  getPageNumbers(): number[] {
    const pageCount = Math.ceil(this.jobs.length / this.companiesPerPage);
    return Array.from({ length: pageCount }, (_, index) => index + 1);
  }
  ngOnInit(): void {
  
    this.service.getJobs().subscribe(
      (res:any)=>{
        this.jobs=res.result
        this.companiesFound=this.jobs.length
        console.log(this.jobs)
      },
      err =>{console.error(err)}
    )  
  }
  openAddCompanyModal() {
    this.showAddCompanyModal = true;
  }
  
  
}
