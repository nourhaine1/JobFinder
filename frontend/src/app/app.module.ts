import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, RouterOutlet, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { CompanyModule } from './company/company.module';
import { CompanyListComponent } from './company/company-list/company-list.component';
const routes: Routes = [
  {path:'companies',component:CompanyListComponent}

]
@NgModule({
  declarations: [
    AppComponent,
    AppFooterComponent,
    AppNavbarComponent,
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    CompanyModule,
    RouterModule.forRoot(routes), // Importer RouterModule.forRoot avec vos routes
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
