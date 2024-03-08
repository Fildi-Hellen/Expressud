import { Injectable } from '@angular/core';
import { Cart } from '../food/shared/models/Cart';
import { CartItem } from '../food/shared/models/Cartitem';
import { resturant} from '../food/shared/models/resturant';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart:Cart = new Cart();
  
  addToCart(resturant: resturant):void{
    let cartItem = this.cart.items.find(item => item.resturant.id === resturant.id);
    if(cartItem){
      this.changeQuantity(resturant.id, cartItem.quantity + 1);
      return;
    }
    this.cart.items.push(new CartItem(resturant));
  }

  removeFromCart(resturantId:number): void{
    this.cart.items = 
    this.cart.items.filter(item => item.resturant.id != resturantId);
  }

  changeQuantity(resturantId:number, quantity:number){
    let cartItem = this.cart.items.find(item => item.resturant.id === resturantId);
    if(!cartItem) return;
    cartItem.quantity = quantity;
  }

  getCart():Cart{
    return this.cart;
  }
}