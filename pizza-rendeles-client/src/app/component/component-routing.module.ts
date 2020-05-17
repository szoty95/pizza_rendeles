import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DataComponent} from './data/data.component';
import {ThanksComponent} from './thanks/thanks.component';

const appRoutes: Routes = [
  { path: 'orderdata', component: DataComponent },
  { path: 'thanks', component: ThanksComponent}
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
