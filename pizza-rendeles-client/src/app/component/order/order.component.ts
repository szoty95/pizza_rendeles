import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {
  Basket,
  BasketService,
  BoxedPizza,
  BoxedPizzaService, Order,
  OrderService,
  PersonalDetails,
  PersonalDetailsService
} from '../../../swagger';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {DatePipe} from '@angular/common';
import {AppComponent} from '../../app.component';

@Component({
  selector: 'app-component-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})

export class OrderComponent implements OnInit {

  // Személy és regisztrálás változó
  person: PersonalDetails;
  registered = false;
  selected = false;
  alreadyRegistered = false;

  // Form változók
  myForm: FormGroup;
  submitted = false;
  selectForm: FormGroup;

  // visibility változók
  notStrangerVisible: boolean = false;
  strangerVisible: boolean = false;

  // pénzösszeg
  summary = 0;

  boxes: BoxedPizza[] = [];
  baskets: Basket[] = [];
  people: PersonalDetails[] = [];

  constructor(public router: Router, public basketService: BasketService, public orderService: OrderService, public formBuilder: FormBuilder, public personalDetailsService: PersonalDetailsService, public datePipe: DatePipe) {

    basketService.getBaskets().subscribe(resp => resp.baskets.forEach(box => {
      this.baskets.push(box);
      AppComponent.baskets.push(box);
      this.summary += box.price;
    }));

    personalDetailsService.getPersonalDetails().subscribe(resp => this.people = resp.personalDetails);
  }

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required]
    }, {
      validator: [this.ValidNumber('phone'), this.ValidEmail('email')]

    });

    this.selectForm = this.formBuilder.group({
      selectControl: [this.person]
    });
  }

  register(myForm: FormGroup) {
    this.submitted = true;

    if (this.myForm.invalid) {
      console.log('Invalid data');
      return;
    }

    console.log('Registration successful.');
    console.log(myForm.value);

    this.person = {
      userID: null,
      personalName: myForm.controls.name.value,
      address: myForm.controls.address.value,
      phoneNumber: myForm.controls.phone.value,
      emailAddress: myForm.controls.email.value
    };

    console.log(this.person.personalName, this.person.address, this.person.phoneNumber, this.person.emailAddress);
    this.registered = true;
    this.enableCheck();
  }

  registerAgain() {
    this.registered = true;
    this.enableCheck();
    this.alreadyRegistered = true;
  }

  resetForm() {
    this.submitted = false;
    this.myForm.reset();
  }

  ValidNumber(controlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];

      if (/(20|30|70)[0-9]{7,7}/.test(control.value)) {
        control.setErrors(null);
      } else {
        control.setErrors({validNumber: true});
      }
    };
  }

  ValidEmail(controlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];

      if (/^\w+@([\w-]+\.)+[\w-]{2,3}$/.test(control.value)) {
        control.setErrors(null);
      } else {
        control.setErrors({validEmail: true});
      }
    };
  }

  notStranger() {
    this.notStrangerVisible = !this.notStrangerVisible;
    if (this.notStrangerVisible) {
      const button = document.getElementById('newButton');
      button.setAttribute('disabled', 'disabled');
      button.classList.add('disabled');
    } else {
      const button = document.getElementById('newButton');
      button.removeAttribute('disabled');
      button.classList.remove('disabled');

      this.resetForm();
      this.registered = false;
    }
  }

  stranger() {
    this.strangerVisible = !this.strangerVisible;
    if (this.strangerVisible) {
      const button = document.getElementById('notNewButton');
      button.setAttribute('disabled', 'disabled');
      button.classList.add('disabled');
    } else {
      const button = document.getElementById('notNewButton');
      button.removeAttribute('disabled');
      button.classList.remove('disabled');
    }

  }

  enableCheck() {
    const checkButton = document.getElementById('checkButton');
    checkButton.classList.remove('disabled');
    checkButton.removeAttribute('disabled');
  }

  disableCheck() {
    const checkButton = document.getElementById('checkButton');
    checkButton.classList.add('disabled');
    checkButton.setAttribute('disabled', 'disabled');
  }

  checkPersonId(){
    this.personalDetailsService.getPersonalDetails().subscribe(resp => {
      resp.personalDetails.forEach(p => {
        if (p.phoneNumber === this.person.phoneNumber){
          this.person.userID = p.userID;
        }
      });
    });
    return;
  }

  orderChecked() {
    let finish = document.getElementById('finishButton');
    finish.classList.remove('disabled');
    finish.removeAttribute('disabled');

    if (!this.alreadyRegistered) {
      this.personalDetailsService.addPersonalDetails(this.person).subscribe(resp => {
        this.person = this.person;
      });
    }

    if (this.strangerVisible) {
      this.strangerVisible = false;
      const button = document.getElementById('newButton');
      button.setAttribute('disabled', 'disabled');
      button.classList.add('disabled');
    }
    if (this.notStrangerVisible) {
      this.notStrangerVisible = false;
      const button = document.getElementById('notNewButton');
      button.setAttribute('disabled', 'disabled');
      button.classList.add('disabled');
    }

    const otherButton = document.getElementById('cancelButton');
    otherButton.setAttribute('disabled', 'disabled');
    otherButton.classList.add('disabled');

    this.checkPersonId();

    this.disableCheck();
  }

  switchThanks(){
    this.router.navigateByUrl('/component/thanks');
  }

  findID(){
    this.orderService.getOrders().subscribe(resp => {
      resp.orders.forEach(o => {
        if (o.personalDetails.userID === this.person.userID){
          AppComponent.orderId = this.person.userID;
        }
      });
    });
    this.switchThanks();
  }

  goThanks() {
    const order: Order = {
      orderID: null,
      orderPrice: this.summary,
      orderDate: this.datePipe.transform(Date.now(), 'yyyy-MM-dd'),
      personalDetails: this.person,
      boxedPizzas: this.boxes
    };

    this.orderService.addOrder(this.person.userID, order).subscribe(resp =>{});
    AppComponent.order = order;
    this.findID();
  }


  goBack() {
    this.router.navigateByUrl('/component/data');
  }

  changePerson() {
    this.registered = false;
    this.resetForm();
    this.disableCheck();
  }

  setData(person: PersonalDetails) {
    this.person = person;
    const addressInput = document.getElementById('addressShower');
    addressInput?.setAttribute('value', person.address);
    const phoneInput = document.getElementById('phoneShower');
    phoneInput?.setAttribute('value', person.phoneNumber);
    const emailInput = document.getElementById('emailShower');
    emailInput?.setAttribute('value', person.emailAddress);
  }

  resetData() {
    const addressInput = document.getElementById('addressShower');
    addressInput?.setAttribute('value', '');
    const phoneInput = document.getElementById('phoneShower');
    phoneInput?.setAttribute('value', '');
    const emailInput = document.getElementById('emailShower');
    emailInput?.setAttribute('value', '');

    this.registered = false;
  }

  onSelect(form: FormGroup) {
    this.selected = true;
    const p: PersonalDetails = {
      userID: null,
      personalName: form.controls.selectControl.value.personalName,
      address: form.controls.selectControl.value.address,
      phoneNumber: form.controls.selectControl.value.phoneNumber,
      emailAddress: form.controls.selectControl.value.emailAddress
    };
    this.setData(p);
  }

}
