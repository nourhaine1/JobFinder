import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Company } from '../model/Company';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyServiceService {

  private companies : Company[] = [];

  baseUrl = 'http://localhost:3800';

  constructor(private http : HttpClient) { }

 
  getCompanies = () : Observable<Company[]> =>{
    return this.http.get<Company[]>(`${this.baseUrl}/api/companys/`, );
  }


}