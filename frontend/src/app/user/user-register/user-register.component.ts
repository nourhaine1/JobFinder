import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {


  constructor(private router:Router,private formBuilder: FormBuilder, private userService: UserService) {

  }
  form = this.formBuilder.group({
    fullName: '',
    description: '',
    email: '',
    password: '',
    status: '',  // <-- Initialize with an empty string
    company: '', // <-- New FormControl for the company
    adresse: '',
    birthday: Date,
    skills: '',
  })
  ngOnInit(): void {

    this.userService.getUsers().subscribe(
      res=>{
        console.log(res)
      }
    )

  }


  register() {
    console.log(this.form.value)
    if (this.form.valid) {
      this.userService.createUser(this.form.value).subscribe(
        res => {
          console.log(res)
          this.router.navigate(['/users/login'])

        },
        (error: Error) => {
          console.log(error)
        }
      );
    }


  }


}
