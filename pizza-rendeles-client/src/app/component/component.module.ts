import {BoxedPizzaService, OrderService, PersonalDetailsService, PizzaService, SauceService, ToppingService} from '../../swagger';
import {HttpClientModule} from '@angular/common/http';
import {Component, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DataComponent} from './data/data.component';
import {ThanksComponent} from './thanks/thanks.component';
import {ComponentRoutingModule} from './component-routing.module';
import {OrderComponent} from './order/order.component';

@NgModule({
  providers: [
    BoxedPizzaService,
    PizzaService,
    OrderService,
    PersonalDetailsService,
    SauceService,
    ToppingService
  ],
  declarations: [
    DataComponent,
    ThanksComponent,
    OrderComponent
  ],
  imports: [
    CommonModule,
    ComponentRoutingModule,
    HttpClientModule
  ]
})
export class ComponentModule { }
