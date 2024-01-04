import { Component, OnInit,Inject } from '@angular/core';
//import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { RecruiterService } from '../recruiter.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-post-job',
  templateUrl: './post-job.component.html',
  styleUrls: ['./post-job.component.css']
})

@Inject({
  providedIn: 'root',
})
/*postajob() {
    console.log(this.postjobForm.value);
    this.recruiterservice.postjob(JSON.stringify(this.postjobForm.value)).subscribe(
      (response:any)=>{
        if(response.status && response.status==1)
        {
          this.postedMsg=response.message;
          setTimeout(()=>{
            this.postedMsg='';
            this.router.navigate(['rdashboard/postedjobs']);
          },2000);
        }else{
          this.alreadyposted=response.message;
          setTimeout(()=>{
            this.alreadyposted='';
          },2000);
        }
      },()=>{
        this.errormsg="Internal Server Error";
      }
    )
  }
}*/
export class PostjobComponent implements OnInit {
  postjobForm: FormGroup = new FormGroup({}); // Explicit initialization
  postedMsg: any;
  alreadyposted: any;
  errormsg: any;
  companyname: any;
  companyId: any;

  constructor(private router: Router, private recruiterservice: RecruiterService, private fb: FormBuilder, private http: HttpClient) {}

  postjob(data: any): Observable<any> {
    // Assuming you are making an HTTP post request, adjust it accordingly
    return this.http.post<any>('your-api-endpoint', data);
  }

  ngOnInit() {
    this.companyname = this.recruiterservice.getpayload().companyName;
    this.companyId = this.recruiterservice.getpayload().id;

    this.postjobForm = this.fb.group({
      companyId: new FormControl(this.companyId),
      jobRole: ['', Validators.required],
      expRequired: ['', Validators.required],
      skills: ['', Validators.required],
      educationalQualifications: ['', Validators.required],
      jobDescription: ['', Validators.required],
      jobType: ['', Validators.required]
    });
  }

  postajob() {
    console.log(this.postjobForm.value);
    this.recruiterservice.postjob(JSON.stringify(this.postjobForm.value)).subscribe(
      (response: any) => {
        if (response.status && response.status == 1) {
          this.postedMsg = response.message;
          setTimeout(() => {
            this.postedMsg = '';
            this.router.navigate(['rec-dash/postedjobs']);
          }, 2000);
        } else {
          this.alreadyposted = response.message;
          setTimeout(() => {
            this.alreadyposted = '';
          }, 2000);
        }
      },
      () => {
        this.errormsg = 'Internal Server Error';
      }
    );
  }
}
