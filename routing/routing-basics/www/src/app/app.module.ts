import {NgModule} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserModule} from '@angular/platform-browser';
import {Http, HttpModule, BaseRequestOptions} from '@angular/http';
import {AppComponent} from './app.component';
import {HomeComponent} from '../home/home.component';
import {ProductsComponent} from '../products/products.component';
import {AboutComponent} from '../about/about.component';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {routing} from './routes';

@NgModule({
  providers: [
    BaseRequestOptions,
    HttpModule,
    {provide: LocationStrategy, useClass: HashLocationStrategy},
  ],
  imports: [BrowserModule, HttpModule, routing],
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    AboutComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
