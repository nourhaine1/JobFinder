import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-user-profil',
  templateUrl: './user-profil.component.html',
  styleUrls: ['./user-profil.component.css']
})
export class UserProfilComponent implements OnInit {

  user: User;
  

  constructor(private userService:UserService) {

    this.user = new User("","","", "","",  "", "",new Date(), "","","")
  }
    
  
  ngOnInit(): void {
    
    this.userService.userLogin().subscribe(
      res=>{
        this.user=res
      },
      err =>{console.error(err)}
    )  
  }


}
