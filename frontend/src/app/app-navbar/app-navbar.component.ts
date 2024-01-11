import { Component, OnInit } from '@angular/core';
import { Emitters } from '../emitters/emitters';
import { UserService } from '../user/service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.css']
})
export class AppNavbarComponent implements OnInit {
  authenticated = false

  constructor(private userservice: UserService, private router: Router) { }



  ngOnInit(): void {
    console.log(this.authenticated)
    Emitters.authEmitter.subscribe(
      
      (auth: boolean) => {
        this.authenticated = auth
        console.log(this.authenticated)

      }
    )
  }

  logout(): void {

    this.userservice.logout().subscribe(
      (res: any) => {
        this.authenticated = false
        this.router.navigate([''])
      }
    )


  }


}
