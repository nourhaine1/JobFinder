import { Component, Output ,EventEmitter} from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-company-add',
  templateUrl: './company-add.component.html',
  styleUrls: ['./company-add.component.css']
})
export class CompanyAddComponent {
  @Output() closeModal: EventEmitter<boolean> = new EventEmitter<boolean>();
  showModal = true;
  selectedFile: File | null = null;
  constructor(public dialogRef: MatDialogRef<CompanyAddComponent>) { }

  close(): void {
    this.dialogRef.close();
  }
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0] as File;
    console.log(this.selectedFile);
  }

}
