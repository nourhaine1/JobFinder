import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { switchAll } from 'rxjs';
//import { ReactiveFormsModule } from '@angular/forms';
//import { LoginComponent } from './src/app/components/login.component';
//import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ){}
  ngOnInit(): void {
      //throw new Error('Methode not implemented.');
      this.form = this.formBuilder.group({
        email:'',
        password:'',
      });
  }
  ValidateEmail = (email: any) => {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email.match(validRegex)) {
      return true;
    } else {
      return false;
    }
  }

  submit():void{
    let user = this.form.getRawValue();
    if (user.name == "" || user.email == '' || user.password == ''){
      //Swal.fire('Error', 'Please enter all the fields', 'error');
    }else if(!this.ValidateEmail(user.email)){
      //Swal.fire('Error', 'Please enter a valid email address', 'error');
    }else{
      this.http.post("http://localhost:5000/api/login",user,{
        withCredentials:true
      })
      .subscribe(
        (res) => this.router.navigate(['/']),
        (err) =>{
          //Swal.fire("Error",err.error.message,"error")
        }
      )
    }

  }
}
