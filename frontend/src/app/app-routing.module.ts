import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  
 
  
  {
    path: 'users',
    loadChildren: () => import('./user/user.module')
      .then(m => m.UserModule),
     
  },

 /* {
    path: 'companies',
    loadChildren: () => import('./company/company.module')
      .then(m => m.CompanyModule),
     
  },
  */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
