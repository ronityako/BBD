import { Injectable } from '@angular/core';
import { CartProduct } from '../classes/cart-product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartProducts;

  addToCart(product:CartProduct){
    
    let obj = {
      "name": product.name,
      "description": product.description,
      "unitPrice": product.unitPrice,
      "quantity": product.quantity }
    this.cartProducts.push(obj);
    console.log(this.cartProducts);
  }

  constructor() { }
}
