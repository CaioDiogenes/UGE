import { Component, OnInit, Input } from '@angular/core';
import {trigger, state, style, transition, animate} from '@angular/animations'
import { Company } from './company.model';

@Component({
  selector: 'mt-company',
  templateUrl: './company.component.html',
  animations: [
    trigger('companyAppeared', [
      state('ready', style({opacity: 1})),
      transition('void => ready', [
        style({opacity: 0, transform: 'translate(-30px, -10px)'}),
        animate('300ms 0s ease-in-out')
      ])
    ])
  ]
})
export class CompanyComponent implements OnInit {

  companyState = 'ready'

  @Input() company: Company

  constructor() { }

  ngOnInit() {
    
  console.log(this.company,'restuadbfa')
  }

}
