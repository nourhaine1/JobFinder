import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CompanyAddComponent } from '../../company/company-add/company-add.component';
import { CompanyService } from '../../company/service/company.service';


@Component({
  selector: 'app-job-add',
  templateUrl: './job-add.component.html',
  styleUrls: ['./job-add.component.css']
})
export class JobAddComponent {
  constructor(private router:Router,private formBuilder: FormBuilder,public dialogRef: MatDialogRef<CompanyAddComponent>,private service : CompanyService) { }
  form = this.formBuilder.group({
    company_name: '',
    secteur: '',
    description: '',
    website: '',
    email: '',
    location: '',
    logo: File // Set initial value to null for the logo
  });
  close(): void {
    this.dialogRef.close();
  }
  onSubmit(){

  }
}
