import { Component, OnInit } from '@angular/core';
import { Company } from '../model/Company';
import { CompanyServiceService } from '../service/company-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {
  companies? : Company[];
  subscription? : Subscription;

  constructor(private service : CompanyServiceService){}
ngOnInit(): void {
  this.service.getCompanies().subscribe(
    companies => this.companies = companies
  );

}
}
