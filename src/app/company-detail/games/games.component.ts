import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {MenuItem} from '../menu-item/menu-item.model'

import {Observable} from 'rxjs/Observable'
import { CompanysService } from 'app/company/companys.service';


@Component({
  selector: 'mt-games',
  templateUrl: './games.component.html'
})
export class GamesComponent implements OnInit {

  games: Observable<MenuItem[]>

  constructor(private companysService: CompanysService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.games = this.companysService
      .menuOfCompany(this.route.parent.snapshot.params['id'])
  }

  addMenuItem(item: MenuItem){
    console.log(item)
  }







}
