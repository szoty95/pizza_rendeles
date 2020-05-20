import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import {BASE_PATH, BasketService, BoxedPizzaService, OrderService, PizzaService} from '../swagger';
import {DEV_SERVER_PATH} from './shared/variables/variables';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {DatePipe} from '@angular/common';


@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        RouterModule,
        AppRoutingModule,
        HttpClientModule,
      ReactiveFormsModule
    ],
  providers: [
    {provide: BASE_PATH, useValue: DEV_SERVER_PATH},
    PizzaService,
    BoxedPizzaService,
    OrderService,
    BasketService,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


