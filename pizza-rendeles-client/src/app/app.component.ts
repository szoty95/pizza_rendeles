import {Component, OnInit} from '@angular/core';
import {Pizza, PizzaService} from '../swagger';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'pizza-rendeles-client';

  // Láthatósági segédváltozók
  visibleList = false;
  visibleTypes = false;

  // Nevek és feltétek
  pizzas: string[] = [];
  sonkasToppings: string[] = [];
  hawaiiToppings: string[] = [];
  songokuToppings: string[] = [];
  szalamisToppings: string[] = [];
  kuszaToppings: string[] = [];
  jokerToppings: string[] = [];
  abToppings: string[] = [];
  magyarosToppings: string[] = [];
  ordogToppings: string[] = [];
  yoloToppings: string[] = [];
  mcstarToppings: string[] = [];

  // true = vastag pizza, false = vékony pizza (vékony az alapértelmezett)
  sonkasThickness: boolean = false;
  hawaiiThickness: boolean = false;
  songokuThickness: boolean = false;
  szalamisThickness: boolean = false;
  kuszaThickness: boolean = false;
  jokerThickness: boolean = false;
  abThickness: boolean = false;
  magyarosThickness: boolean = false;
  ordogThickness: boolean = false;
  yoloThickness: boolean = false;
  mcstarThickness: boolean = false;

  // true = 50cm-es pizza, false = 32-es pizza (32-es az alapértelmezett)
  sonkasBigDiameter: boolean = false;
  hawaiiBigDiameter: boolean = false;
  songokuBigDiameter: boolean = false;
  szalamisBigDiameter: boolean = false;
  kuszaBigDiameter: boolean = false;
  jokerBigDiameter: boolean = false;
  abBigDiameter: boolean = false;
  magyarosBigDiameter: boolean = false;
  ordogBigDiameter: boolean = false;
  yoloBigDiameter: boolean = false;
  mcstarBigDiameter: boolean = false;

  smallprice = 800;
  bigprice = 1300;

  constructor(private pizzaService: PizzaService) {

    pizzaService.getPizzaTypes().subscribe(resp => resp.pizzas.forEach(pizza => {
      this.pizzas.push(pizza.pizzaName);
      if (pizza.pizzaName === 'Sonkás') {
        pizza.toppings.forEach(topping => {
          this.sonkasToppings.push(topping.toppingName);
        });
      }
      if (pizza.pizzaName === 'Hawaii') {
        pizza.toppings.forEach(topping => {
          this.hawaiiToppings.push(topping.toppingName);
        });
      }
      if (pizza.pizzaName === 'Songoku') {
        pizza.toppings.forEach(topping => {
          this.songokuToppings.push(topping.toppingName);
        });
      }
      if (pizza.pizzaName === 'Szalámis') {
        pizza.toppings.forEach(topping => {
          this.szalamisToppings.push(topping.toppingName);
        });
      }
      if (pizza.pizzaName === 'Kusza') {
        pizza.toppings.forEach(topping => {
          this.kuszaToppings.push(topping.toppingName);
        });
      }
      if (pizza.pizzaName === 'Joker') {
        pizza.toppings.forEach(topping => {
          this.jokerToppings.push(topping.toppingName);
        });
      }
      if (pizza.pizzaName === 'Magyaros') {
        pizza.toppings.forEach(topping => {
          this.magyarosToppings.push(topping.toppingName);
        });
      }
      if (pizza.pizzaName === 'Ördög') {
        pizza.toppings.forEach(topping => {
          this.ordogToppings.push(topping.toppingName);
        });
      }
      if (pizza.pizzaName === 'Albínó Batman') {
        pizza.toppings.forEach(topping => {
          this.abToppings.push(topping.toppingName);
        });
      }
      if (pizza.pizzaName === 'Yolo') {
        pizza.toppings.forEach(topping => {
          this.yoloToppings.push(topping.toppingName);
        });
      }
      if (pizza.pizzaName === 'MCStar') {
        pizza.toppings.forEach(topping => {
          this.mcstarToppings.push(topping.toppingName);
        });
      }
    }));
  }

  listRequested() {
    this.visibleList = !this.visibleList;
  }

  typeRequested() {
    const el: HTMLElement = document.getElementById('fajtak');

    this.visibleTypes = !this.visibleTypes;

    if (this.visibleTypes) {
      el.innerText = 'Rejtsd el a fajtákat!';
    } else {
      el.innerText = 'Mutasd az ajánlatokat!';
    }

  }

  increase() {
  }

  decrease() {
  }

  deleteItem() {
  }

  thickChoice(pizza: string) {
    if (pizza === 'Sonkás') {
      let button = document.getElementById(pizza.concat('thick'));
      let otherButton = document.getElementById(pizza.concat('thin'));
      button.setAttribute('disabled', 'disabled');
      otherButton.removeAttribute('disabled');
      button.classList.add('disabled');
      otherButton.classList.remove('disabled');

      this.sonkasThickness = true;
    }
    if (pizza === 'Hawaii') {
      let button = document.getElementById(pizza.concat('thick'));
      let otherButton = document.getElementById(pizza.concat('thin'));
      button.setAttribute('disabled', 'disabled');
      otherButton.removeAttribute('disabled');
      button.classList.add('disabled');
      otherButton.classList.remove('disabled');

      this.hawaiiThickness = true;
    }
    if (pizza === 'Songoku') {
      let button = document.getElementById(pizza.concat('thick'));
      let otherButton = document.getElementById(pizza.concat('thin'));
      button.setAttribute('disabled', 'disabled');
      otherButton.removeAttribute('disabled');
      button.classList.add('disabled');
      otherButton.classList.remove('disabled');

      this.songokuThickness = true;
    }
    if (pizza === 'Kusza') {
      let button = document.getElementById(pizza.concat('thick'));
      let otherButton = document.getElementById(pizza.concat('thin'));
      button.setAttribute('disabled', 'disabled');
      otherButton.removeAttribute('disabled');
      button.classList.add('disabled');
      otherButton.classList.remove('disabled');

      this.kuszaThickness = true;
    }
    if (pizza === 'Szalámis') {
      let button = document.getElementById(pizza.concat('thick'));
      let otherButton = document.getElementById(pizza.concat('thin'));
      button.setAttribute('disabled', 'disabled');
      otherButton.removeAttribute('disabled');
      button.classList.add('disabled');
      otherButton.classList.remove('disabled');

      this.szalamisThickness = true;
    }
    if (pizza === 'Joker') {
      let button = document.getElementById(pizza.concat('thick'));
      let otherButton = document.getElementById(pizza.concat('thin'));
      button.setAttribute('disabled', 'disabled');
      otherButton.removeAttribute('disabled');
      button.classList.add('disabled');
      otherButton.classList.remove('disabled');

      this.jokerThickness = true;
    }
    if (pizza === 'Magyaros') {
      let button = document.getElementById(pizza.concat('thick'));
      let otherButton = document.getElementById(pizza.concat('thin'));
      button.setAttribute('disabled', 'disabled');
      otherButton.removeAttribute('disabled');
      button.classList.add('disabled');
      otherButton.classList.remove('disabled');

      this.magyarosThickness = true;
    }
    if (pizza === 'Ördög') {
      let button = document.getElementById(pizza.concat('thick'));
      let otherButton = document.getElementById(pizza.concat('thin'));
      button.setAttribute('disabled', 'disabled');
      otherButton.removeAttribute('disabled');
      button.classList.add('disabled');
      otherButton.classList.remove('disabled');

      this.ordogThickness = true;
    }
    if (pizza === 'Albínó Batman') {
      let button = document.getElementById(pizza.concat('thick'));
      let otherButton = document.getElementById(pizza.concat('thin'));
      button.setAttribute('disabled', 'disabled');
      otherButton.removeAttribute('disabled');
      button.classList.add('disabled');
      otherButton.classList.remove('disabled');

      this.abThickness = true;
    }
    if (pizza === 'Yolo') {
      let button = document.getElementById(pizza.concat('thick'));
      let otherButton = document.getElementById(pizza.concat('thin'));
      button.setAttribute('disabled', 'disabled');
      otherButton.removeAttribute('disabled');
      button.classList.add('disabled');
      otherButton.classList.remove('disabled');

      this.yoloThickness = true;
    }
    if (pizza === 'MCStar') {
      let button = document.getElementById(pizza.concat('thick'));
      let otherButton = document.getElementById(pizza.concat('thin'));
      button.setAttribute('disabled', 'disabled');
      otherButton.removeAttribute('disabled');
      button.classList.add('disabled');
      otherButton.classList.remove('disabled');

      this.mcstarThickness = true;
    }
  }

  thinChoice(pizza: string){
    if (pizza === 'Sonkás') {
      let button = document.getElementById(pizza.concat('thin'));
      let otherButton = document.getElementById(pizza.concat('thick'));
      button.setAttribute('disabled', 'disabled');
      otherButton.removeAttribute('disabled');
      button.classList.add('disabled');
      otherButton.classList.remove('disabled');

      this.sonkasThickness = false;
    }
    if (pizza === 'Hawaii') {
      let button = document.getElementById(pizza.concat('thin'));
      let otherButton = document.getElementById(pizza.concat('thick'));
      button.setAttribute('disabled', 'disabled');
      otherButton.removeAttribute('disabled');
      button.classList.add('disabled');
      otherButton.classList.remove('disabled');

      this.hawaiiThickness = false;
    }
    if (pizza === 'Songoku') {
      let button = document.getElementById(pizza.concat('thin'));
      let otherButton = document.getElementById(pizza.concat('thick'));
      button.setAttribute('disabled', 'disabled');
      otherButton.removeAttribute('disabled');
      button.classList.add('disabled');
      otherButton.classList.remove('disabled');

      this.songokuThickness = false;
    }
    if (pizza === 'Kusza') {
      let button = document.getElementById(pizza.concat('thin'));
      let otherButton = document.getElementById(pizza.concat('thick'));
      button.setAttribute('disabled', 'disabled');
      otherButton.removeAttribute('disabled');
      button.classList.add('disabled');
      otherButton.classList.remove('disabled');

      this.kuszaThickness = false;
    }
    if (pizza === 'Szalámis') {
      let button = document.getElementById(pizza.concat('thin'));
      let otherButton = document.getElementById(pizza.concat('thick'));
      button.setAttribute('disabled', 'disabled');
      otherButton.removeAttribute('disabled');
      button.classList.add('disabled');
      otherButton.classList.remove('disabled');

      this.szalamisThickness = false;
    }
    if (pizza === 'Joker') {
      let button = document.getElementById(pizza.concat('thin'));
      let otherButton = document.getElementById(pizza.concat('thick'));
      button.setAttribute('disabled', 'disabled');
      otherButton.removeAttribute('disabled');
      button.classList.add('disabled');
      otherButton.classList.remove('disabled');

      this.jokerThickness = false;
    }
    if (pizza === 'Magyaros') {
      let button = document.getElementById(pizza.concat('thin'));
      let otherButton = document.getElementById(pizza.concat('thick'));
      button.setAttribute('disabled', 'disabled');
      otherButton.removeAttribute('disabled');
      button.classList.add('disabled');
      otherButton.classList.remove('disabled');

      this.magyarosThickness = false;
    }
    if (pizza === 'Ördög') {
      let button = document.getElementById(pizza.concat('thin'));
      let otherButton = document.getElementById(pizza.concat('thick'));
      button.setAttribute('disabled', 'disabled');
      otherButton.removeAttribute('disabled');
      button.classList.add('disabled');
      otherButton.classList.remove('disabled');

      this.ordogThickness = false;
    }
    if (pizza === 'Albínó Batman') {
      let button = document.getElementById(pizza.concat('thin'));
      let otherButton = document.getElementById(pizza.concat('thick'));
      button.setAttribute('disabled', 'disabled');
      otherButton.removeAttribute('disabled');
      button.classList.add('disabled');
      otherButton.classList.remove('disabled');

      this.abThickness = false;
    }
    if (pizza === 'Yolo') {
      let button = document.getElementById(pizza.concat('thin'));
      let otherButton = document.getElementById(pizza.concat('thick'));
      button.setAttribute('disabled', 'disabled');
      otherButton.removeAttribute('disabled');
      button.classList.add('disabled');
      otherButton.classList.remove('disabled');

      this.yoloThickness = false;
    }
    if (pizza === 'MCStar') {
      let button = document.getElementById(pizza.concat('thin'));
      let otherButton = document.getElementById(pizza.concat('thick'));
      button.setAttribute('disabled', 'disabled');
      otherButton.removeAttribute('disabled');
      button.classList.add('disabled');
      otherButton.classList.remove('disabled');

      this.mcstarThickness = false;
    }
  }

  bigChoice(pizza: string){
    if (pizza === 'Sonkás') {
      let button = document.getElementById(pizza.concat('big'));
      let otherButton = document.getElementById(pizza.concat('small'));
      button.setAttribute('disabled', 'disabled');
      otherButton.removeAttribute('disabled');
      button.classList.add('disabled');
      otherButton.classList.remove('disabled');

      this.sonkasBigDiameter = true;
    }
    if (pizza === 'Hawaii') {
      let button = document.getElementById(pizza.concat('big'));
      let otherButton = document.getElementById(pizza.concat('small'));
      button.setAttribute('disabled', 'disabled');
      otherButton.removeAttribute('disabled');
      button.classList.add('disabled');
      otherButton.classList.remove('disabled');

      this.hawaiiBigDiameter = true;
    }
    if (pizza === 'Songoku') {
      let button = document.getElementById(pizza.concat('big'));
      let otherButton = document.getElementById(pizza.concat('small'));
      button.setAttribute('disabled', 'disabled');
      otherButton.removeAttribute('disabled');
      button.classList.add('disabled');
      otherButton.classList.remove('disabled');

      this.songokuBigDiameter = true;
    }
    if (pizza === 'Kusza') {
      let button = document.getElementById(pizza.concat('big'));
      let otherButton = document.getElementById(pizza.concat('small'));
      button.setAttribute('disabled', 'disabled');
      otherButton.removeAttribute('disabled');
      button.classList.add('disabled');
      otherButton.classList.remove('disabled');

      this.kuszaBigDiameter = true;
    }
    if (pizza === 'Szalámis') {
      let button = document.getElementById(pizza.concat('big'));
      let otherButton = document.getElementById(pizza.concat('small'));
      button.setAttribute('disabled', 'disabled');
      otherButton.removeAttribute('disabled');
      button.classList.add('disabled');
      otherButton.classList.remove('disabled');

      this.szalamisBigDiameter = true;
    }
    if (pizza === 'Joker') {
      let button = document.getElementById(pizza.concat('big'));
      let otherButton = document.getElementById(pizza.concat('small'));
      button.setAttribute('disabled', 'disabled');
      otherButton.removeAttribute('disabled');
      button.classList.add('disabled');
      otherButton.classList.remove('disabled');

      this.jokerBigDiameter = true;
    }
    if (pizza === 'Magyaros') {
      let button = document.getElementById(pizza.concat('big'));
      let otherButton = document.getElementById(pizza.concat('small'));
      button.setAttribute('disabled', 'disabled');
      otherButton.removeAttribute('disabled');
      button.classList.add('disabled');
      otherButton.classList.remove('disabled');

      this.magyarosBigDiameter = true;
    }
    if (pizza === 'Ördög') {
      let button = document.getElementById(pizza.concat('big'));
      let otherButton = document.getElementById(pizza.concat('small'));
      button.setAttribute('disabled', 'disabled');
      otherButton.removeAttribute('disabled');
      button.classList.add('disabled');
      otherButton.classList.remove('disabled');

      this.ordogBigDiameter = true;
    }
    if (pizza === 'Albínó Batman') {
      let button = document.getElementById(pizza.concat('big'));
      let otherButton = document.getElementById(pizza.concat('small'));
      button.setAttribute('disabled', 'disabled');
      otherButton.removeAttribute('disabled');
      button.classList.add('disabled');
      otherButton.classList.remove('disabled');

      this.abBigDiameter = true;
    }
    if (pizza === 'Yolo') {
      let button = document.getElementById(pizza.concat('big'));
      let otherButton = document.getElementById(pizza.concat('small'));
      button.setAttribute('disabled', 'disabled');
      otherButton.removeAttribute('disabled');
      button.classList.add('disabled');
      otherButton.classList.remove('disabled');

      this.yoloBigDiameter = true;
    }
    if (pizza === 'MCStar') {
      let button = document.getElementById(pizza.concat('big'));
      let otherButton = document.getElementById(pizza.concat('small'));
      button.setAttribute('disabled', 'disabled');
      otherButton.removeAttribute('disabled');
      button.classList.add('disabled');
      otherButton.classList.remove('disabled');

      this.mcstarBigDiameter = true;
    }
  }

  smallChoice(pizza: string){
    if (pizza === 'Sonkás') {
      let button = document.getElementById(pizza.concat('small'));
      let otherButton = document.getElementById(pizza.concat('big'));
      button.setAttribute('disabled', 'disabled');
      otherButton.removeAttribute('disabled');
      button.classList.add('disabled');
      otherButton.classList.remove('disabled');

      this.sonkasBigDiameter = false;
    }
    if (pizza === 'Hawaii') {
      let button = document.getElementById(pizza.concat('small'));
      let otherButton = document.getElementById(pizza.concat('big'));
      button.setAttribute('disabled', 'disabled');
      otherButton.removeAttribute('disabled');
      button.classList.add('disabled');
      otherButton.classList.remove('disabled');

      this.hawaiiBigDiameter = false;
    }
    if (pizza === 'Songoku') {
      let button = document.getElementById(pizza.concat('small'));
      let otherButton = document.getElementById(pizza.concat('big'));
      button.setAttribute('disabled', 'disabled');
      otherButton.removeAttribute('disabled');
      button.classList.add('disabled');
      otherButton.classList.remove('disabled');

      this.songokuBigDiameter = false;
    }
    if (pizza === 'Kusza') {
      let button = document.getElementById(pizza.concat('small'));
      let otherButton = document.getElementById(pizza.concat('big'));
      button.setAttribute('disabled', 'disabled');
      otherButton.removeAttribute('disabled');
      button.classList.add('disabled');
      otherButton.classList.remove('disabled');

      this.kuszaBigDiameter = false;
    }
    if (pizza === 'Szalámis') {
      let button = document.getElementById(pizza.concat('small'));
      let otherButton = document.getElementById(pizza.concat('big'));
      button.setAttribute('disabled', 'disabled');
      otherButton.removeAttribute('disabled');
      button.classList.add('disabled');
      otherButton.classList.remove('disabled');

      this.szalamisBigDiameter = false;
    }
    if (pizza === 'Joker') {
      let button = document.getElementById(pizza.concat('small'));
      let otherButton = document.getElementById(pizza.concat('big'));
      button.setAttribute('disabled', 'disabled');
      otherButton.removeAttribute('disabled');
      button.classList.add('disabled');
      otherButton.classList.remove('disabled');

      this.jokerBigDiameter = false;
    }
    if (pizza === 'Magyaros') {
      let button = document.getElementById(pizza.concat('small'));
      let otherButton = document.getElementById(pizza.concat('big'));
      button.setAttribute('disabled', 'disabled');
      otherButton.removeAttribute('disabled');
      button.classList.add('disabled');
      otherButton.classList.remove('disabled');

      this.magyarosBigDiameter = false;
    }
    if (pizza === 'Ördög') {
      let button = document.getElementById(pizza.concat('small'));
      let otherButton = document.getElementById(pizza.concat('big'));
      button.setAttribute('disabled', 'disabled');
      otherButton.removeAttribute('disabled');
      button.classList.add('disabled');
      otherButton.classList.remove('disabled');

      this.ordogBigDiameter = false;
    }
    if (pizza === 'Albínó Batman') {
      let button = document.getElementById(pizza.concat('small'));
      let otherButton = document.getElementById(pizza.concat('big'));
      button.setAttribute('disabled', 'disabled');
      otherButton.removeAttribute('disabled');
      button.classList.add('disabled');
      otherButton.classList.remove('disabled');

      this.abBigDiameter = false;
    }
    if (pizza === 'Yolo') {
      let button = document.getElementById(pizza.concat('small'));
      let otherButton = document.getElementById(pizza.concat('big'));
      button.setAttribute('disabled', 'disabled');
      otherButton.removeAttribute('disabled');
      button.classList.add('disabled');
      otherButton.classList.remove('disabled');

      this.yoloBigDiameter = false;
    }
    if (pizza === 'MCStar') {
      let button = document.getElementById(pizza.concat('small'));
      let otherButton = document.getElementById(pizza.concat('big'));
      button.setAttribute('disabled', 'disabled');
      otherButton.removeAttribute('disabled');
      button.classList.add('disabled');
      otherButton.classList.remove('disabled');

      this.mcstarBigDiameter = false;
    }
  }

  ngOnInit(): void {
  }
}


