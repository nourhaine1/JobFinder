import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

const PUBLIC='https://naukaries.herokuapp.com/public/';
const PRIVATE='https://naukaries.herokuapp.com/private/';

@Injectable({
  providedIn: 'root'
})
export class RecruiterService {
 /* postjob(arg0: string) {
    throw new Error('Method not implemented.');
  } */
  postjob(data: any): Observable<any> {
    // Assuming you are making an HTTP post request, adjust it accordingly
    return this.http.post<any>('your-api-endpoint', data);
  }

  constructor(private http:HttpClient) { }
  //constructor(private router: Router, private recruiterservice: RecruiterService, private fb: FormBuilder, private httpClient: HttpClient) {}


  login(body:any){
    return this.http.post(`${PUBLIC}employee/login`,body
    ,{
      observe:'body',
      withCredentials:true,
      headers:new HttpHeaders().append('Content-Type','application/json')
    }
    );
  }

  employee_register(body:any){
    return this.http.post(`${PUBLIC}addemployee`,body,
    {
      observe:'body',
      headers:new HttpHeaders().append('Content-Type','application/json')
    }
    );
  }

  getjobs()
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'application/json, text/plain, */*',
         'Content-Type':'application/json',
        'Authorization': 'Bearer '+this.gettoken()
      })
    };
    console.log(httpOptions);
    return this.http.get(`${PRIVATE}employees/getjobs/${this.getpayload().id}`,httpOptions);
  }

  searchbycompany(companyname: any)
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'application/json, text/plain, */*',
         'Content-Type':'application/json',
        'Authorization': 'Bearer '+this.gettoken()
      })
    };
    return this.http.get(`${PRIVATE}employees/companyname/${companyname}`,httpOptions);
  }
  searchbyrole(jobrole:any)
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'application/json, text/plain, */*',
         'Content-Type':'application/json',
        'Authorization': 'Bearer '+this.gettoken()
      })
    };
    return this.http.get(`${PRIVATE}employees/jobrole/${jobrole}`,httpOptions);
  }
  searchlatestjobs()
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'application/json, text/plain, */*',
         'Content-Type':'application/json',
        'Authorization': 'Bearer '+this.gettoken()
      })
    };
    return this.http.get(`${PRIVATE}employees/latest`,httpOptions);
  }

  applyjob(jobs:any)
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization': 'Bearer'+' '+this.gettoken()
      })
    };
    let job_id:any=jobs.jobDetails._id;
    let emp_id:any=this.getpayload().id;
    return this.http.get(`${PRIVATE}employees/apply/${emp_id}/${job_id}`,httpOptions);
  }

  /*getappliedjobs()
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization': this.gettoken()
      })
    };
    return this.httpCli.get(`${PRIVATE}employees/appliedlist/${this.getpayload().username}`,httpOptions);
  }*/

  getappliedjobs() {
    const token = this.gettoken();

    if (token !== null) {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': token
        })
      };

      const username = this.getpayload()?.username; // Using optional chaining

      if (username) {
        return this.http.get(`${PRIVATE}employees/appliedlist/${username}`, httpOptions);
      } else {
        console.error('Username is null or undefined'); // Log an error or handle it in some way
        return null; // Or return a default value based on your requirements
      }
    } else {
      console.error('Token is null'); // Log an error or handle it in some way
      return null; // Or return a default value based on your requirements
    }
  }


  uploadprofilepic(fd:any)
  {
    return this.http.post(`${PRIVATE}employee/uploadpicture/${this.getpayload().id}`,fd);

  }

  gettoken()
{
  return localStorage.getItem('token');
}

/*getpayload()
{
  let token=this.gettoken();
  return JSON.parse(window.atob(token.split('.')[1]));
}*/

getpayload() {
  let token = this.gettoken();

  if (token) {
    return JSON.parse(window.atob(token.split('.')[1]));
  } else {
    // Handle the case where token is null
    console.error('Token is null'); // Log an error or handle it in some way
    return null; // Or return a default value based on your requirements
  }
}

Empupdateprofile(body:any)
{
  return this.http.put(`${PRIVATE}employees/editprofile`,body,
  {

      observe:'body',
      headers:new HttpHeaders().append('Content-Type','application/json')

  });
}

getprofile()
{
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': `Bearer${this.gettoken()}`
    })
  };
  return this.http.get(`${PRIVATE}employees/profile/${this.getpayload().id}`,httpOptions);
}

logout()
{
  localStorage.removeItem('token');
  localStorage.removeItem('currentemployee');
  localStorage.removeItem('currentemployeeid')
}

}
