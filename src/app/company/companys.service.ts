import {Injectable} from '@angular/core'
import {Http} from '@angular/http'

import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'


import {UGE_API} from '../app.api'
import {ErrorHandler} from '../app.error-handler'
import { Company } from './company/company.model';
import { MenuItem } from 'app/company-detail/menu-item/menu-item.model';

@Injectable()
export class CompanysService {

    constructor(private http: Http){}

    companys(search?: string): Observable<Company[]> {
      return this.http.get(`${UGE_API}/companys`, {params: {q: search}})
        .map(response => response.json())
        .catch(ErrorHandler.handleError)
    }

    companyById(id: string): Observable<Company>{
      console.log('this id',id)
      return this.http.get(`${UGE_API}/companys/${id}`)
        .map(response => response.json())
        .catch(ErrorHandler.handleError)
    }

    reviewsOfCompany(id: string): Observable<any>{
      return this.http.get(`${UGE_API}/companys/${id}/reviews`)
        .map(response => response.json())
        .catch(ErrorHandler.handleError)
    }

    menuOfCompany(id: string): Observable<MenuItem[]>{
      console.log(id,'hmmmmmm')
      return this.http.get(`${UGE_API}/companys/${id}/games`)
        .map(response => response.json())
        .catch(ErrorHandler.handleError)
    }

}
