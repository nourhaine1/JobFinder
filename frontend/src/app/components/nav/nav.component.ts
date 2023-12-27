import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Emitters } from 'src/app/emitters/emitter';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent implements OnInit {
  authenticated = false

  constructor(private http:HttpClient){}

  ngOnInit(): void {
      Emitters.authEmitter.subscribe((auth:boolean) => {
        this.authenticated = auth
      })
  }

  logout():void{
    this.http.post('http://localhost:5000/api/logout',{},{withCredentials:true})
    .subscribe(() => this.authenticated = false)
  }
}
