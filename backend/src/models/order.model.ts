import {model, Schema, Types} from 'mongoose';
import { OrderStatus } from '../constants/order-status';
import { Food, FoodSchema } from './food.model';
import { Bakery, BakerySchema } from './bakery.model';
import { Boutique, BoutiqueModel, BoutiqueSchema } from './boutique.model';
import { Cosmetic, CosmeticSchema } from './cosmetic.model';
import { Furniture, FurnitureSchema } from './furniture.model';
import { Market, MarketSchema } from './market.model';
import { Pharm, PharmSchema } from './pharm.model';
import { Real, RealSchema } from './real.model';
import { Super, SuperSchema } from './super.model';
import { Sweet, SweetSchema } from './sweet.model';
import { Hair, HairSchema } from './hair.model';

export interface LatLng{
    lat: string;
    lng: string;
}

export const LatLngSchema = new Schema<LatLng>(
    {
        lat: {type: String, required: true},
        lng: {type: String, required: true},
    }
);

export interface OrderItem{
    food: Food;
    bakery:Bakery;
    boutique:Boutique;
    cosmetic:Cosmetic;
    furniture:Furniture;
    market:Market;
    pharm:Pharm;
    real:Real;
    super:Super;
    sweet:Sweet;
    hair:Hair;
    price: number;
    quantity: number;
}

export const OrderItemSchema = new Schema<OrderItem>(
    {
        food:{type: FoodSchema, required: true},
        bakery:{type: BakerySchema, required: true},
        boutique:{type: BoutiqueSchema, required: true},
        cosmetic:{type: CosmeticSchema, required: true},
        furniture:{type: FurnitureSchema, required: true},
        market:{type: MarketSchema, required: true},
        pharm:{type: PharmSchema, required: true},
        real:{type: RealSchema, required: true},
        super:{type: SuperSchema, required: true},
        sweet:{type: SweetSchema, required: true},
        hair:{type: HairSchema, required: true},
        price:{ type: Number, required:true},
        quantity: {type: Number, required: true}
    }
);

export interface Order{
    id:string;
    items: OrderItem[];
    totalPrice:number;
    name: string;
    address: string;
    addressLatLng:LatLng
    paymentId: string;
    status: OrderStatus;
    user: Types.ObjectId;
    createdAt: Date;
    updatedAt: Date
  }

  const orderSchema = new Schema<Order>({
      name: {type: String, required: true},
      address: {type: String, required: true},
      addressLatLng: {type: LatLngSchema, required: true},
      paymentId: {type: String},
      totalPrice: {type: Number, required: true},
      items: {type: [OrderItemSchema], required: true},
      status: {type: String, default: OrderStatus.NEW},
      user: {type: Schema.Types.ObjectId, required: true}
  },{
      timestamps: true,
      toJSON:{
          virtuals: true
      },
      toObject:{
          virtuals: true
      }
  });

  export const OrderModel = model('order', orderSchema);