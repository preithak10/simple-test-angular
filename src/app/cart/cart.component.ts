import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { CartService } from '../cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items1;
  checkoutForm1;
  constructor(
    private cartServic: CartService,
    private formBuild: FormBuilder,
  ) { 
    this.checkoutForm1 = this.formBuild.group({
      name: '',
      address: ''
    });
  }

  ngOnInit() {
   // console.log(this.checkoutForm1);
    this.items1 = this.cartServic.getItems();
   // console.log(this.items1);
  }

  onSubmit(customerData) {
    this.items1 = this.cartServic.clearCart();
    this.checkoutForm1.reset();

    console.warn('Form Submitted', customerData);
  }

}