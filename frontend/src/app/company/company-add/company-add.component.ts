import { Component, Output ,EventEmitter} from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CompanyServiceService } from '../service/company-service.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-company-add',
  templateUrl: './company-add.component.html',
  styleUrls: ['./company-add.component.css']
})
export class CompanyAddComponent {
  constructor(private router:Router,private formBuilder: FormBuilder,public dialogRef: MatDialogRef<CompanyAddComponent>,private service : CompanyServiceService) { }

  @Output() closeModal: EventEmitter<boolean> = new EventEmitter<boolean>();
  showModal = true;
  selectedFile: File | null = null;
  form = this.formBuilder.group({
    company_name:'',
		secteur:'' ,
		description:'',
		website:'',
		email:'',
		location:'',
		logo:File
  })
  close(): void {
    this.dialogRef.close();
  }
  onFileSelected(event: Event): void {
   
    console.log(this.selectedFile);
  }
  
  
  submit() {
    const formData = new FormData();
   

    this.service.addCompany(formData).subscribe(
      (response) => {
        console.log('Company added successfully:', response);
        // Handle success - maybe redirect or show a success message
      },
      (error) => {
        console.error('Error adding company:', error);
        // Handle error - show error message or handle differently
      }
    );
  }
  
  
  
  
  handleSuccess(): void {
    console.log('Company added successfully!');
    this.form.reset();
  }

  handleError(error: any): void {
    console.error('Error adding company:', error);
  }
}
