import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { MainComponent } from './main/main.component';
import { TopWidgetsComponent } from './top-widgets/top-widgets.component';
import { SalesByCategoryComponent } from './sales-by-category/sales-by-category.component';
import { LastFewComponentsComponent } from './last-few-components/last-few-components.component';
import { Top3ProductsComponent } from './top-3-products/top-3-products.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SalesByMonthComponent } from './sales-by-month/sales-by-month.component';
import { LastFewTransactionsComponent } from './last-few-transactions/last-few-transactions.component';

import { ChartModule } from 'angular-highcharts';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideNavComponent,
    MainComponent,
    TopWidgetsComponent,
    SalesByCategoryComponent,
    LastFewComponentsComponent,
    Top3ProductsComponent,
    SalesByMonthComponent,
    LastFewTransactionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ChartModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
