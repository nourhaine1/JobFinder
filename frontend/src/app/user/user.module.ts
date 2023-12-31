import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserProfilComponent } from './user-profil/user-profil.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [


    UserLoginComponent,
    UserRegisterComponent,
    UserProfilComponent,
    UserEditComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class UserModule { }
