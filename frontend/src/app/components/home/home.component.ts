import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Emitters } from 'src/app/emitters/emitter';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  //message: ""
  message: any | "" = "";


  constructor(private http:HttpClient){}
    ngOnInit():void{
      this.http.get('http://localhost:5000/api/user',{
        withCredentials:true
      })
      .subscribe(
        (res: any) => {
          this.message = `Hi ${res.name}`;
          Emitters.authEmitter.emit(true)
        },
        (err) => {
          this.message = "You are not logged in"
          Emitters.authEmitter.emit(false)
        }
      );
    }
}
