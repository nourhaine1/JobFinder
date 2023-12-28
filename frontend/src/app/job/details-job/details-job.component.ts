import { Component, OnInit } from '@angular/core';
import { JobService } from '../service/job.service';
import { Job } from '../model/job';
import { ActivatedRoute } from '@angular/router';
import { Company } from 'src/app/company/model/company';
import { CompanyService } from 'src/app/company/service/company.service';
import { ApplicationService } from 'src/app/application/service/application.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-details-job',
  templateUrl: './details-job.component.html',
  styleUrls: ['./details-job.component.css']
})
export class DetailsJobComponent implements OnInit {

  job?:Job
  company?:Company
  job_id:any
  deja_apply:boolean=true;

  constructor(private applicationService:ApplicationService ,private jobService:JobService,private companyService:CompanyService,
    private activatedRoute: ActivatedRoute) {

   
  }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(
      params=>{

        this.jobService.getJobById(params['id']).subscribe(
          (res:any)=>{
            console.log(params['id'])
            this.job=res.result
            this.job_id=params['id']
            this.companyService.getCompanyById(this.job?.society_id).subscribe(
              (res:any)=>{
                this.company=res.result
            
              }
            )
            
          },
          err =>{console.error(err)}
        )  
      })
    
  }

  apply(job_id:any) : void {

    const application={
      user_id:'',
      job_id:job_id
    }
    application.user_id=this.activatedRoute.snapshot.params['id'];

    console.log(application)

    this.applicationService.createApplication(application).subscribe(
    (res:any)=>{
      console.log(res)
      this.openAlert()
    }
    )
  }

  openAlert(): void {
    Swal.fire({
      title: 'Done',
      text: 'Your application passed succefuly',
      icon: 'success',
      confirmButtonText: 'OK',
    }).then((result) => {
      if (result.isConfirmed) {
        console.log('L\'utilisateur a cliqué sur OK');
      }
    });
  }

}
