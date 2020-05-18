import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DataComponent} from './data/data.component';
import {ThanksComponent} from './thanks/thanks.component';
import {OrderComponent} from './order/order.component';

const appRoutes: Routes = [
  { path: 'data', component: DataComponent },
  { path: 'thanks', component: ThanksComponent},
  { path: 'order', component: OrderComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(
      appRoutes,
    )
  ],
  exports: [
    RouterModule
  ]
})
export class ComponentRoutingModule {}
