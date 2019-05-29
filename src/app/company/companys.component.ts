import { Component, OnInit } from '@angular/core';
import {trigger, state, style, transition, animate} from '@angular/animations'
import {FormBuilder, FormControl, FormGroup} from '@angular/forms'


import 'rxjs/add/operator/switchMap'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/debounceTime'
import 'rxjs/add/operator/distinctUntilChanged'
import 'rxjs/add/operator/catch'
import 'rxjs/add/observable/from'
import {Observable} from 'rxjs/Observable'
import { Company } from './company/company.model';
import { CompanysService } from './companys.service';

@Component({
  selector: 'mt-companys',
  templateUrl: './companys.component.html',
  animations: [
    trigger('toggleSearch', [
      state('hidden', style({
        opacity: 0,
        "max-height": "0px"
      })),
      state('visible', style({
        opacity: 1,
        "max-height": "70px",
        "margin-top": "20px"
      })),
      transition('* => *', animate('250ms 0s ease-in-out'))
    ])
  ]
})
export class CompanysComponent implements OnInit {

  searchBarState = 'hidden'
  companys: Company[]

  searchForm: FormGroup
  searchControl: FormControl

  constructor(private companysService: CompanysService,
              private fb: FormBuilder) { }

  ngOnInit() {

    this.searchControl = this.fb.control('')
    this.searchForm = this.fb.group({
      searchControl: this.searchControl
    })

    this.searchControl.valueChanges
        .debounceTime(500)
        .distinctUntilChanged()
        .switchMap(searchTerm =>
          this.companysService
            .companys(searchTerm)
            .catch(error=>Observable.from([])))
        .subscribe(company => this.companys = company)

    this.companysService.companys()
      .subscribe(company => this.companys = company)
  }

  toggleSearch(){
    this.searchBarState = this.searchBarState === 'hidden' ? 'visible' : 'hidden'
  }

}
