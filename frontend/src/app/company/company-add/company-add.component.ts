import { Component, Output ,EventEmitter} from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CompanyServiceService } from '../service/company-service.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
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
  onFileSelected(event: Event): void {
   
    console.log(this.selectedFile);
  }
  
  onSubmit() {
    const formData = new FormData();
  
    const companyName = this.form.get('company_name')?.value;
    const website = this.form.get('website')?.value;
    const location = this.form.get('location')?.value;
    const email = this.form.get('email')?.value;
    const secteur = this.form.get('secteur')?.value;
    const description = this.form.get('description')?.value;
  
    formData.append('company_name', companyName as string);
    formData.append('email', email as string);
    formData.append('location', location as string);
    formData.append('description', description as string);
    formData.append('website', website as string);
    formData.append('secteur', secteur as string);
  
    const logoFile = this.form.get('logo')?.value as File | null;
    if (logoFile) {
      const formattedLogo = {
        data: logoFile,
        contentType: logoFile.type,
        filename: logoFile.name
      };
  
      formData.append('logo', JSON.stringify(formattedLogo));
    }
    this.service.addCompany(formData).subscribe(
      (response) => {
        console.log('Company added successfully:', response);
      },
      (error) => {
        console.error('Error adding company:', error);
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
