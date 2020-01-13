import { Component, OnInit } from '@angular/core';
import { CartProduct } from '../../classes/cart-product';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {

  total:number;
  showPopup:boolean = false;

  addToTable(product:CartProduct){
    this.cartSrv.addToCart(product);
    this.showPopup = false;
  }

  constructor( private cartSrv:CartService ) { }

  ngOnInit() {
  }

}
