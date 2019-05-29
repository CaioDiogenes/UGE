import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, PreloadAllModules } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

import {ROUTES} from './app.routes'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { CompanysComponent } from './company/companys.component';
import { CompanyComponent } from './company/company/company.component';
import { CompanyDetailComponent } from './company-detail/company-detail.component';
import { GamesComponent } from './company-detail/games/games.component';
import { ShoppingCartComponent } from './company-detail/shopping-cart/shopping-cart.component';
import { MenuItemComponent } from './company-detail/menu-item/menu-item.component';
import { ReviewsComponent } from './company-detail/reviews/reviews.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CompanysComponent,
    CompanyComponent,
    CompanyDetailComponent,
    GamesComponent,
    ShoppingCartComponent,
    MenuItemComponent,
    ReviewsComponent,
    OrderSummaryComponent,
    NotFoundComponent
   ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    SharedModule.forRoot(),
    RouterModule.forRoot(ROUTES, {preloadingStrategy: PreloadAllModules})
  ],
  providers: [{provide: LOCALE_ID, useValue: 'pt-BR'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
