import {Routes} from '@angular/router'

import {HomeComponent} from './home/home.component'
import { CompanysComponent } from './company/companys.component';
import { CompanyDetailComponent } from './company-detail/company-detail.component';
import { GamesComponent } from './company-detail/games/games.component';
import { ReviewsComponent } from './company-detail/reviews/reviews.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'companys', component: CompanysComponent},
  {path: 'companys/:id', component: CompanyDetailComponent,
    children: [
      {path: '', redirectTo: 'games', pathMatch: 'full'},
      {path: 'games', component: GamesComponent},
      {path: 'reviews', component: ReviewsComponent}
    ]},
  {path: 'order', loadChildren: './order/order.module#OrderModule'},
  {path: 'order-summary', component: OrderSummaryComponent},
  {path: 'about', loadChildren: './about/about.module#AboutModule'},
  {path: '**', component: NotFoundComponent}
]
