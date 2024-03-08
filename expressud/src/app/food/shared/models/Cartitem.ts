
import { resturant } from "./resturant";


export class CartItem{
    constructor(resturant:resturant){
      this.resturant= resturant;  
    }
    resturant:resturant;
    quantity:number = 1;

    get price():number{
        return this.resturant.price* this.quantity;
    }
}