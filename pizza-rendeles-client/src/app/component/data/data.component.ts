import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {BoxedPizza, BoxedPizzaService, Pizza, PizzaService} from '../../../swagger';

@Component({
  selector: 'app-component-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  // elemek
  pizzaTypes: Pizza[] = [];
  public boxedPizza: BoxedPizza;
  mySubscription: any;

  // Láthatósági segédváltozók
  visibleList = false;
  visibleTypes = true;

  // Dobozok és paramétereik
  boxes: BoxedPizza[] = [];

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

  // mennyiségek a konkrét kosárbatétel előtt
  sonkasQuantity: number = 0;
  hawaiiQuantity: number = 0;
  songokuQuantity: number = 0;
  szalamisQuantity: number = 0;
  kuszaQuantity: number = 0;
  jokerQuantity: number = 0;
  magyarosQuantity: number = 0;
  ordogQuantity: number = 0;
  abQuantity: number = 0;
  yoloQuantity: number = 0;
  mcstarQuantity: number = 0;

  smallprice = 800;
  bigprice = 1300;

  constructor(public router: Router, private pizzaService: PizzaService, private boxedPizzaService: BoxedPizzaService) {

    pizzaService.getPizzaTypes().subscribe(resp => resp.pizzas.forEach(pizza => {
      this.pizzas.push(pizza.pizzaName);
      this.pizzaTypes.push(pizza);
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

    boxedPizzaService.getBoxedPizzas().subscribe(resp => {
      this.boxes = resp.boxedPizzas;

    });

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

  // kiválasztott mennyiség növelése (nem a kosárban)
  increase(pizza: string) {
    if (pizza === 'Sonkás') {
      let input = document.getElementById(pizza.concat('input'));
      this.sonkasQuantity++;
      input.setAttribute('value', this.sonkasQuantity.toString());
    }
    if (pizza === 'Hawaii') {
      let input = document.getElementById(pizza.concat('input'));
      this.hawaiiQuantity++;
      input.setAttribute('value', this.hawaiiQuantity.toString());
    }
    if (pizza === 'Songoku') {
      let input = document.getElementById(pizza.concat('input'));
      this.songokuQuantity++;
      input.setAttribute('value', this.songokuQuantity.toString());
    }
    if (pizza === 'Szalámis') {
      let input = document.getElementById(pizza.concat('input'));
      this.szalamisQuantity++;
      input.setAttribute('value', this.szalamisQuantity.toString());
    }
    if (pizza === 'Kusza') {
      let input = document.getElementById(pizza.concat('input'));
      this.kuszaQuantity++;
      input.setAttribute('value', this.kuszaQuantity.toString());
    }
    if (pizza === 'Joker') {
      let input = document.getElementById(pizza.concat('input'));
      this.jokerQuantity++;
      input.setAttribute('value', this.jokerQuantity.toString());
    }
    if (pizza === 'Magyaros') {
      let input = document.getElementById(pizza.concat('input'));
      this.magyarosQuantity++;
      input.setAttribute('value', this.magyarosQuantity.toString());
    }
    if (pizza === 'Ördög') {
      let input = document.getElementById(pizza.concat('input'));
      this.ordogQuantity++;
      input.setAttribute('value', this.ordogQuantity.toString());
    }
    if (pizza === 'Albínó Batman') {
      let input = document.getElementById(pizza.concat('input'));
      this.abQuantity++;
      input.setAttribute('value', this.abQuantity.toString());
    }
    if (pizza === 'Yolo') {
      let input = document.getElementById(pizza.concat('input'));
      this.yoloQuantity++;
      input.setAttribute('value', this.yoloQuantity.toString());
    }
    if (pizza === 'MCStar') {
      let input = document.getElementById(pizza.concat('input'));
      this.mcstarQuantity++;
      input.setAttribute('value', this.mcstarQuantity.toString());
    }
  }

  // kiválasztott mennyiség csökkentése (nem a kosárban)
  decrease(pizza: string) {
    if (pizza === 'Sonkás') {
      let input = document.getElementById(pizza.concat('input'));
      if (this.sonkasQuantity > 0) {
        this.sonkasQuantity--;
        input.setAttribute('value', this.sonkasQuantity.toString());
      } else {
        this.sonkasQuantity = 0;
        input.setAttribute('value', '0');
      }
    }
    if (pizza === 'Hawaii') {
      let input = document.getElementById(pizza.concat('input'));
      if (this.hawaiiQuantity > 0) {
        this.hawaiiQuantity--;
        input.setAttribute('value', this.hawaiiQuantity.toString());
      } else {
        this.hawaiiQuantity = 0;
        input.setAttribute('value', '0');
      }
    }
    if (pizza === 'Songoku') {
      let input = document.getElementById(pizza.concat('input'));
      if (this.songokuQuantity > 0) {
        this.songokuQuantity--;
        input.setAttribute('value', this.songokuQuantity.toString());
      } else {
        this.songokuQuantity = 0;
        input.setAttribute('value', '0');
      }
    }
    if (pizza === 'Szalámis') {
      let input = document.getElementById(pizza.concat('input'));
      if (this.szalamisQuantity > 0) {
        this.szalamisQuantity--;
        input.setAttribute('value', this.szalamisQuantity.toString());
      } else {
        this.szalamisQuantity = 0;
        input.setAttribute('value', '0');
      }
    }
    if (pizza === 'Kusza') {
      let input = document.getElementById(pizza.concat('input'));
      if (this.kuszaQuantity > 0) {
        this.kuszaQuantity--;
        input.setAttribute('value', this.kuszaQuantity.toString());
      } else {
        this.kuszaQuantity = 0;
        input.setAttribute('value', '0');
      }
    }
    if (pizza === 'Joker') {
      let input = document.getElementById(pizza.concat('input'));
      if (this.jokerQuantity > 0) {
        this.jokerQuantity--;
        input.setAttribute('value', this.jokerQuantity.toString());
      } else {
        this.jokerQuantity = 0;
        input.setAttribute('value', '0');
      }
    }
    if (pizza === 'Magyaros') {
      let input = document.getElementById(pizza.concat('input'));
      if (this.magyarosQuantity > 0) {
        this.magyarosQuantity--;
        input.setAttribute('value', this.magyarosQuantity.toString());
      } else {
        this.magyarosQuantity = 0;
        input.setAttribute('value', '0');
      }
    }
    if (pizza === 'Ördög') {
      let input = document.getElementById(pizza.concat('input'));
      if (this.ordogQuantity > 0) {
        this.ordogQuantity--;
        input.setAttribute('value', this.ordogQuantity.toString());
      } else {
        this.ordogQuantity = 0;
        input.setAttribute('value', '0');
      }
    }
    if (pizza === 'Albínó Batman') {
      let input = document.getElementById(pizza.concat('input'));
      if (this.abQuantity > 0) {
        this.abQuantity--;
        input.setAttribute('value', this.abQuantity.toString());
      } else {
        this.abQuantity = 0;
        input.setAttribute('value', '0');
      }
    }
    if (pizza === 'Yolo') {
      let input = document.getElementById(pizza.concat('input'));
      if (this.yoloQuantity > 0) {
        this.yoloQuantity--;
        input.setAttribute('value', this.yoloQuantity.toString());
      } else {
        this.yoloQuantity = 0;
        input.setAttribute('value', '0');
      }
    }
    if (pizza === 'MCStar') {
      let input = document.getElementById(pizza.concat('input'));
      if (this.mcstarQuantity > 0) {
        this.mcstarQuantity--;
        input.setAttribute('value', this.mcstarQuantity.toString());
      } else {
        this.mcstarQuantity = 0;
        input.setAttribute('value', '0');
      }
    }
  }

  //kosár elem törlés
  deleteItem(box: BoxedPizza) {
    this.boxedPizzaService.getBoxedPizzas().subscribe(resp => resp.boxedPizzas.forEach(b => {
      if (box.pizzaID === b.pizzaID) {
        this.boxedPizzaService.deleteBoxedPizza(b.pizzaID).subscribe(rez =>
          this.boxes = this.boxes.filter(c => c.pizzaID !== rez));
      }
    }));
  }

  // kosár törlése
  deleteBasket() {
    this.boxedPizzaService.getBoxedPizzas().subscribe(resp => resp.boxedPizzas.forEach(box => {
        this.boxedPizzaService.deleteBoxedPizza(box.pizzaID).subscribe(resp => {
          this.boxes = [];
        });
      }
    ));
  }

  // vastag tészta választás
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

  // vékony tészta választása
  thinChoice(pizza: string) {
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

  // 50-es átmérő választás
  bigChoice(pizza: string) {
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

  // 32-es átmérő választása
  smallChoice(pizza: string) {
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

  // dobozolt pizzák kosárba tétele
  submitBoxes(pizza: string) {
    let input = document.getElementById(pizza.concat('input'));

    // sonkás = 1
    if (pizza === 'Sonkás') {

      for (let i = 0; i < this.sonkasQuantity; i++) {

        this.pizzaService.getPizzaTypes().subscribe(resp => resp.pizzas.forEach(item => {
          if (item.pizzaName === 'Sonkás') {
            if (this.sonkasBigDiameter) {
              this.boxedPizza = {
                pizzaID: null,
                price: this.bigprice,
                pizza: item,
                size: this.sonkasBigDiameter,
                thick: this.sonkasThickness
              };

              this.boxedPizzaService.addBoxedPizza(1, this.boxedPizza).subscribe(rez => {
                this.boxes.push(rez);
              });

            } else {
              this.boxedPizza = {
                pizzaID: null,
                price: this.smallprice,
                pizza: item,
                size: this.sonkasBigDiameter,
                thick: this.sonkasThickness
              };

              this.boxedPizzaService.addBoxedPizza(1, this.boxedPizza).subscribe(rez => {
                  this.boxes.push(rez);
                }
              );
            }


          }
        }));
      }
    }

    // songoku =2
    if (pizza === 'Songoku') {

      for (let i = 0; i < this.songokuQuantity; i++) {

        this.pizzaService.getPizzaTypes().subscribe(resp => resp.pizzas.forEach(item => {
          if (item.pizzaName === 'Songoku') {
            if (this.songokuBigDiameter) {
              this.boxedPizza = {
                pizzaID: null,
                price: this.bigprice,
                pizza: item,
                size: this.songokuBigDiameter,
                thick: this.songokuThickness
              };

              this.boxedPizzaService.addBoxedPizza(2, this.boxedPizza).subscribe(rez => {
                this.boxes.push(rez);
              });

            } else {
              this.boxedPizza = {
                pizzaID: null,
                price: this.smallprice,
                pizza: item,
                size: this.songokuBigDiameter,
                thick: this.songokuThickness
              };

              this.boxedPizzaService.addBoxedPizza(2, this.boxedPizza).subscribe(rez => {
                this.boxes.push(rez);
              });
            }


          }
        }));
      }
    }

    // hawaii = 3
    if (pizza === 'Hawaii') {

      for (let i = 0; i < this.hawaiiQuantity; i++) {

        this.pizzaService.getPizzaTypes().subscribe(resp => resp.pizzas.forEach(item => {
          if (item.pizzaName === 'Hawaii') {
            if (this.hawaiiBigDiameter) {
              this.boxedPizza = {
                pizzaID: null,
                price: this.bigprice,
                pizza: item,
                size: this.hawaiiBigDiameter,
                thick: this.hawaiiThickness
              };

              this.boxedPizzaService.addBoxedPizza(3, this.boxedPizza).subscribe(rez => {
                this.boxes.push(rez);
              });

            } else {
              this.boxedPizza = {
                pizzaID: null,
                price: this.smallprice,
                pizza: item,
                size: this.hawaiiBigDiameter,
                thick: this.hawaiiThickness
              };

              this.boxedPizzaService.addBoxedPizza(3, this.boxedPizza).subscribe(rez => {
                this.boxes.push(rez);
              });
            }


          }
        }));
      }
    }

    // szalámis = 4
    if (pizza === 'Szalámis') {

      for (let i = 0; i < this.szalamisQuantity; i++) {

        this.pizzaService.getPizzaTypes().subscribe(resp => resp.pizzas.forEach(item => {
          if (item.pizzaName === 'Szalámis') {
            if (this.szalamisBigDiameter) {
              this.boxedPizza = {
                pizzaID: null,
                price: this.bigprice,
                pizza: item,
                size: this.szalamisBigDiameter,
                thick: this.szalamisThickness
              };

              this.boxedPizzaService.addBoxedPizza(4, this.boxedPizza).subscribe(rez => {
                this.boxes.push(rez);
              });

            } else {
              this.boxedPizza = {
                pizzaID: null,
                price: this.smallprice,
                pizza: item,
                size: this.szalamisBigDiameter,
                thick: this.szalamisThickness
              };

              this.boxedPizzaService.addBoxedPizza(4, this.boxedPizza).subscribe(rez => {
                this.boxes.push(rez);
              });
            }


          }
        }));
      }
    }

    // magyaros = 5
    if (pizza === 'Magyaros') {

      for (let i = 0; i < this.magyarosQuantity; i++) {

        this.pizzaService.getPizzaTypes().subscribe(resp => resp.pizzas.forEach(item => {
          if (item.pizzaName === 'Magyaros') {
            if (this.magyarosBigDiameter) {
              this.boxedPizza = {
                pizzaID: null,
                price: this.bigprice,
                pizza: item,
                size: this.magyarosBigDiameter,
                thick: this.magyarosThickness
              };

              this.boxedPizzaService.addBoxedPizza(5, this.boxedPizza).subscribe(rez => {
                this.boxes.push(rez);
              });

            } else {
              this.boxedPizza = {
                pizzaID: null,
                price: this.smallprice,
                pizza: item,
                size: this.magyarosBigDiameter,
                thick: this.magyarosThickness
              };

              this.boxedPizzaService.addBoxedPizza(5, this.boxedPizza).subscribe(rez => {
                this.boxes.push(rez);
              });
            }


          }
        }));
      }
    }

    // joker = 6
    if (pizza === 'Joker') {

      for (let i = 0; i < this.jokerQuantity; i++) {

        this.pizzaService.getPizzaTypes().subscribe(resp => resp.pizzas.forEach(item => {
          if (item.pizzaName === 'Joker') {
            if (this.jokerBigDiameter) {
              this.boxedPizza = {
                pizzaID: null,
                price: this.bigprice,
                pizza: item,
                size: this.jokerBigDiameter,
                thick: this.jokerThickness
              };

              this.boxedPizzaService.addBoxedPizza(6, this.boxedPizza).subscribe(rez => {
                this.boxes.push(rez);
              });

            } else {
              this.boxedPizza = {
                pizzaID: null,
                price: this.smallprice,
                pizza: item,
                size: this.jokerBigDiameter,
                thick: this.jokerThickness
              };

              this.boxedPizzaService.addBoxedPizza(6, this.boxedPizza).subscribe(rez => {
                this.boxes.push(rez);
              });
            }


          }
        }));
      }
    }

    // kusza = 7
    if (pizza === 'Kusza') {

      for (let i = 0; i < this.kuszaQuantity; i++) {

        this.pizzaService.getPizzaTypes().subscribe(resp => resp.pizzas.forEach(item => {
          if (item.pizzaName === 'Kusza') {
            if (this.kuszaBigDiameter) {
              this.boxedPizza = {
                pizzaID: null,
                price: this.bigprice,
                pizza: item,
                size: this.kuszaBigDiameter,
                thick: this.kuszaThickness
              };

              this.boxedPizzaService.addBoxedPizza(7, this.boxedPizza).subscribe(rez => {
                this.boxes.push(rez);
              });

            } else {
              this.boxedPizza = {
                pizzaID: null,
                price: this.smallprice,
                pizza: item,
                size: this.kuszaBigDiameter,
                thick: this.kuszaThickness
              };

              this.boxedPizzaService.addBoxedPizza(7, this.boxedPizza).subscribe(rez => {
                this.boxes.push(rez);
              });
            }


          }
        }));
      }
    }

    // ördög = 8
    if (pizza === 'Ördög') {

      for (let i = 0; i < this.ordogQuantity; i++) {

        this.pizzaService.getPizzaTypes().subscribe(resp => resp.pizzas.forEach(item => {
          if (item.pizzaName === 'Ördög') {
            if (this.ordogBigDiameter) {
              this.boxedPizza = {
                pizzaID: null,
                price: this.bigprice,
                pizza: item,
                size: this.ordogBigDiameter,
                thick: this.ordogThickness
              };

              this.boxedPizzaService.addBoxedPizza(8, this.boxedPizza).subscribe(rez => {
                this.boxes.push(rez);
              });

            } else {
              this.boxedPizza = {
                pizzaID: null,
                price: this.smallprice,
                pizza: item,
                size: this.ordogBigDiameter,
                thick: this.ordogThickness
              };

              this.boxedPizzaService.addBoxedPizza(8, this.boxedPizza).subscribe(rez => {
                this.boxes.push(rez);
              });
            }


          }
        }));
      }
    }

    // mcstar = 9
    if (pizza === 'MCStar') {

      for (let i = 0; i < this.mcstarQuantity; i++) {

        this.pizzaService.getPizzaTypes().subscribe(resp => resp.pizzas.forEach(item => {
          if (item.pizzaName === 'MCStar') {
            if (this.mcstarBigDiameter) {
              this.boxedPizza = {
                pizzaID: null,
                price: this.bigprice,
                pizza: item,
                size: this.mcstarBigDiameter,
                thick: this.mcstarThickness
              };

              this.boxedPizzaService.addBoxedPizza(9, this.boxedPizza).subscribe(rez => {
                this.boxes.push(rez);
              });

            } else {
              this.boxedPizza = {
                pizzaID: null,
                price: this.smallprice,
                pizza: item,
                size: this.mcstarBigDiameter,
                thick: this.mcstarThickness
              };

              this.boxedPizzaService.addBoxedPizza(9, this.boxedPizza).subscribe(rez => {
                this.boxes.push(rez);
              });
            }


          }
        }));
      }
    }

    // albínó batman = 10
    if (pizza === 'Albínó Batman') {

      for (let i = 0; i < this.abQuantity; i++) {

        this.pizzaService.getPizzaTypes().subscribe(resp => resp.pizzas.forEach(item => {
          if (item.pizzaName === 'Albínó Batman') {
            if (this.abBigDiameter) {
              this.boxedPizza = {
                pizzaID: null,
                price: this.bigprice,
                pizza: item,
                size: this.abBigDiameter,
                thick: this.abThickness
              };

              this.boxedPizzaService.addBoxedPizza(10, this.boxedPizza).subscribe(rez => {
                this.boxes.push(rez);
              });

            } else {
              this.boxedPizza = {
                pizzaID: null,
                price: this.smallprice,
                pizza: item,
                size: this.abBigDiameter,
                thick: this.abThickness
              };

              this.boxedPizzaService.addBoxedPizza(10, this.boxedPizza).subscribe(rez => {
                this.boxes.push(rez);
              });
            }


          }
        }));
      }
    }

    // yolo = 11
    if (pizza === 'Yolo') {

      for (let i = 0; i < this.yoloQuantity; i++) {

        this.pizzaService.getPizzaTypes().subscribe(resp => resp.pizzas.forEach(item => {
          if (item.pizzaName === 'Yolo') {
            if (this.yoloBigDiameter) {
              this.boxedPizza = {
                pizzaID: null,
                price: this.bigprice,
                pizza: item,
                size: this.yoloBigDiameter,
                thick: this.yoloThickness
              };

              this.boxedPizzaService.addBoxedPizza(11, this.boxedPizza).subscribe(rez => {
                this.boxes.push(rez);
              });

            } else {
              this.boxedPizza = {
                pizzaID: null,
                price: this.smallprice,
                pizza: item,
                size: this.yoloBigDiameter,
                thick: this.yoloThickness
              };

              this.boxedPizzaService.addBoxedPizza(11, this.boxedPizza).subscribe(rez => {
                this.boxes.push(rez);
              });
            }


          }
        }));
      }
    }

    console.log('végeztem');
    return;
  }

  navigateToSecond() {
    this.router.navigateByUrl('/component/order');
  }

  ngOnInit(): void {
  }


}
