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
  companies: Company[]=[];
  subscription? : Subscription;
  companiesFound?:Number
  currentPage = 1;
  companiesPerPage = 5;

  constructor(private service : CompanyServiceService){}

getCurrentPageCompanies(): any[] {
  const startIndex = (this.currentPage - 1) * this.companiesPerPage;
  const endIndex = startIndex + this.companiesPerPage;
  return this.companies.slice(startIndex, endIndex);
}

// Fonction pour changer de page
changePage(pageNumber: number): void {
  this.currentPage = pageNumber;
}
getPageNumbers(): number[] {
  const pageCount = Math.ceil(this.companies.length / this.companiesPerPage);
  return Array.from({ length: pageCount }, (_, index) => index + 1);
}
ngOnInit(): void {

  this.service.getCompanies().subscribe(
    (res:any)=>{
      this.companies=res.result
      this.companiesFound=this.companies.length
      console.log(this.companies)
    },
    err =>{console.error(err)}
  )  
}


}
