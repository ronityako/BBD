import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartProduct } from '../../classes/cart-product';

@Component({
  selector: 'app-cart-grid',
  templateUrl: './cart-grid.component.html',
  styleUrls: ['./cart-grid.component.css']
})
export class CartGridComponent implements OnInit {

  cartProducts:CartProduct[] = [];
  @Output() totalChanged = new EventEmitter();
  total:number = 0;

  calculateTotal(){
    this.cartProducts.forEach(element => {
      this.total += element.unitPrice * element.quantity;
    });
    console.log(this.total);
    this.totalChanged.emit(this.total);
  }



  constructor( private cartSrv: CartService ) { }

  ngOnInit() {
    this.cartSrv.cartProducts = [
    {
      "name": "Product1",
      "description": "This is the description of Product1",
      "unitPrice":150,
      "quantity":1
    },
    {
      "name": "Product2",
      "description": "This is the description of Product2",
      "unitPrice":200,
      "quantity":2
    }
  ]
    
  this.cartSrv.cartProducts.forEach(element => {
    this.cartProducts.push(new CartProduct(element.name, element.description, element.unitPrice, element.quantity));
  });

  this.calculateTotal();

  }

}
