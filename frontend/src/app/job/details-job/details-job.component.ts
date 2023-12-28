import { Component, OnInit } from '@angular/core';
import { JobService } from '../service/job.service';
import { Job } from '../model/job';
import { ActivatedRoute } from '@angular/router';
import { Company } from 'src/app/company/model/company';
import { CompanyService } from 'src/app/company/service/company.service';

@Component({
  selector: 'app-details-job',
  templateUrl: './details-job.component.html',
  styleUrls: ['./details-job.component.css']
})
export class DetailsJobComponent implements OnInit {

  job?:Job
  company?:Company

  constructor(private jobService:JobService,private companyService:CompanyService,private activatedRoute: ActivatedRoute) {

   
  }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(
      params=>{

        this.jobService.getJobById(params['id']).subscribe(
          (res:any)=>{
            console.log(params['id'])
            this.job=res.result
            this.companyService.getCompanyById(this.job?.society_id).subscribe(
              (res:any)=>{
                this.company=res.result
                console.log(res)
                console.log(this.company)
              }
            )
            
            console.log(this.job)
          },
          err =>{console.error(err)}
        )  
      })
    
  }

}
