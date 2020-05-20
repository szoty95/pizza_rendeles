import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Basket, Order} from '../swagger';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(public router: Router) {

  }
  static orderstarted = false;
  static order: Order;
  static orderId = 0;
  static baskets: Basket[] = [];
  title = 'pizza-rendeles-client';

  ngOnInit(): void {
  }
}


