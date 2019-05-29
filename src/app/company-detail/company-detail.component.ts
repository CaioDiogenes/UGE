import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { Company } from 'app/company/company/company.model';
import { CompanysService } from 'app/company/companys.service';


@Component({
  selector: 'mt-company-detail',
  templateUrl: './company-detail.component.html'
})
export class CompanyDetailComponent implements OnInit {

  company: Company

  constructor(private companyService: CompanysService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.companyService.companyById(this.route.snapshot.params['id'])
      .subscribe(company => this.company = company)
  }
}
