import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import {BASE_PATH, PizzaService} from '../swagger';
import {DEV_SERVER_PATH} from './shared/variables/variables';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        RouterModule,
        AppRoutingModule,
        HttpClientModule
    ],
  providers: [
    {provide: BASE_PATH, useValue: DEV_SERVER_PATH},
    PizzaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


