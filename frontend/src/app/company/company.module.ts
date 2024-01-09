import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyAddComponent } from './company-add/company-add.component';
import { MatDialogModule } from '@angular/material/dialog'; // Import MatDialogModule
import {MatButtonModule} from '@angular/material/button'; 
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    CompanyListComponent,
    CompanyAddComponent
  ],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    MatDialogModule,
    MatButtonModule,
    ReactiveFormsModule
  ]
})
export class CompanyModule { }
