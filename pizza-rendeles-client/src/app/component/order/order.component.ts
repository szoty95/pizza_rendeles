import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {BoxedPizza, BoxedPizzaService, OrderService} from '../../../swagger';
import {subscribeOn} from 'rxjs/operators';

@Component({
  selector: 'app-component-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})

export class OrderComponent implements OnInit {

  // visibility változók
  notStrangerVisible: boolean = false;
  strangerVisible: boolean = false;

  // pénzösszeg
  summary = 0;

  boxes: BoxedPizza[] = [];

  constructor(public router: Router, public boxedPizzaService: BoxedPizzaService, public orderService: OrderService) {

    boxedPizzaService.getBoxedPizzas().subscribe(resp => resp.boxedPizzas.forEach(box => {
      this.boxes.push(box);
      this.summary += box.price;
    }));
  }

  notStranger() {
    this.notStrangerVisible = !this.notStrangerVisible;
    if (this.notStrangerVisible){
      this.strangerVisible = false;
    }
    const button = document.getElementById('notNewButton');
    const otherButton = document.getElementById('newButton');
    button.setAttribute('disabled', 'disabled');
    otherButton.removeAttribute('disabled');
    button.classList.add('disabled');
    otherButton.classList.remove('disabled');

    const checkButton = document.getElementById('checkButton');
    checkButton.classList.remove('disabled');
    checkButton.removeAttribute('disabled');
  }

  stranger() {
    this.strangerVisible = !this.strangerVisible;
    if (this.strangerVisible){
      this.notStrangerVisible = false;
    }
    const button = document.getElementById('newButton');
    const otherButton = document.getElementById('notNewButton');
    button.setAttribute('disabled', 'disabled');
    otherButton.removeAttribute('disabled');
    button.classList.add('disabled');
    otherButton.classList.remove('disabled');

    const checkButton = document.getElementById('checkButton');
    checkButton.classList.remove('disabled');
    checkButton.removeAttribute('disabled');
  }

  orderChecked() {
    let finish = document.getElementById('finishButton');
    finish.classList.remove('disabled');
    finish.removeAttribute('disabled');
  }

  goThanks() {
    this.router.navigateByUrl('/component/thanks');
  }

  goBack(){
    this.router.navigateByUrl('/component/data');
  }

  ngOnInit(): void {
  }

}
