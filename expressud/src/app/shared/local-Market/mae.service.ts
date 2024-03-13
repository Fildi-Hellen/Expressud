import { Injectable } from '@angular/core';
import { market } from './market'

@Injectable({
  providedIn: 'root'
})
export class MaeService {
  getAllMarketsByTag(arg0: any): any {
    throw new Error('Method not implemented.');
  }
  getAllmarketsBySearchTerm(arg0: any): any {
    throw new Error('Method not implemented.');
  }
  

  constructor() { }
  getmarketsById(id: number): market{
    return this.getAll().find(market => market.id == id)!;
  }
  
  getAllMarketsBySearchTerm(searchTerm:string) :market[]{
    return  this.getAll().filter(market =>
      market.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }
 

  
  getAll():market[]{
    return[
    {
      id:1,
      name:'Sanitary pads',
      price:10,
      favorite:false,
      imageUrl:'assets/img/components/always.jpg'
     
    },
    {
      id:2,
      name:'baby',
      price:13,
      favorite:false,
      imageUrl:'assets/img/components/baby.jpg'
    },
    {
      id:3,
      name:'Burger King',
      price:10,
      favorite:false,
      imageUrl:'assets/img/components/bag.jpg'
    },
    {
      id:4,
      name:'Baby food',
      price:10,
      favorite:false,
     imageUrl:'assets/img/components/cerelac.webp'
    },
    {
      id:5,
      name:'skin care',
      price:10,
      favorite:false,
     imageUrl:'assets/img/components/cereva.jpg'
    },
    {
      id:6,
      name:'feeding set',
      price:10,
      favorite:false,
     imageUrl:'assets/img/components/feeding.webp'
    },
    {
      id:7,
      name:'Baby johnson',
      price:10,
      favorite:false,
     imageUrl:'assets/img/components/Johnsons.jpg'
    },
    {
      id:8,
      name:'pampers',
      price:14,
      favorite:false,
     imageUrl:'assets/img/components/pampers.jpg'
    },
    {
      id:9,
      name:'Baby wipes',
      price:14,
      favorite:false,
     imageUrl:'assets/img/components/wipes.png'
    },
    {
      id:10,
      name:'Skin care',
      price:14,
      favorite:false,
     imageUrl:'assets/img/components/skin.webp'
    }
      
    ]
  }
}
