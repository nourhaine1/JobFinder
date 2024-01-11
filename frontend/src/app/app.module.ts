import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { CompanyModule } from './company/company.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AppFooterComponent,
    AppNavbarComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CompanyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
