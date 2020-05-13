import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
produ;
  constructor(
    private routes: ActivatedRoute,
    private cartServices: CartService) { 
    
  }

  ngOnInit() {
    this.routes.paramMap.subscribe(params => {
    this.produ = products[+params.get('productId')];
  });
  }

  addToCart(prod) {
    this.cartServices.addToCart(prod);
    window.alert('Product sucessfully added!');

  }

}