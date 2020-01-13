import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CartProduct } from '../../classes/cart-product';

@Component({
  selector: 'app-user-add-prod',
  templateUrl: './user-add-prod.component.html',
  styleUrls: ['./user-add-prod.component.css']
})
export class UserAddProdComponent implements OnInit {

  userCartProd:CartProduct = new CartProduct("", "", 0, 0);
  @Output() productAdded = new EventEmitter();

  addToCart(){
    this.productAdded.emit(this.userCartProd);
  }
  constructor() { }

  ngOnInit() {
  }

}
