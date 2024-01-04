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
import { UserModule } from './user/user.module';
import { PostjobComponent } from './recruiter/post-job/post-job.component';
import { RecDashComponent } from './recruiter/rec-dash/rec-dash.component';
import { RecProfileComponent } from './recruiter/rec-profile/rec-profile.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AppFooterComponent,
    AppNavbarComponent,
    PostjobComponent,
    RecDashComponent,
    RecProfileComponent



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CompanyModule,
    UserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
