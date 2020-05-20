import {Component, OnInit} from '@angular/core';
import {Basket, BoxedPizza, Order, OrderService} from '../../../swagger';
import {AppComponent} from '../../app.component';
import {Router} from '@angular/router';
import {DataComponent} from '../data/data.component';
import {OrderComponent} from '../order/order.component';

@Component({
  selector: 'app-data',
  templateUrl: './thanks.component.html',
  styleUrls: ['./thanks.component.css']
})
export class ThanksComponent implements OnInit {
  order: Order = AppComponent.order;
  baskets: Basket[] = AppComponent.baskets;

  constructor(private router: Router) {

  }

  backToMain() {
    AppComponent.orderstarted=false;
    this.router.navigateByUrl('/component/data');
  }

  ngOnInit(): void {
  }
}
