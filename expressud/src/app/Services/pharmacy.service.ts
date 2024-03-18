import { Injectable } from '@angular/core';
import { pharm } from '../Shared1/models/pharm';

@Injectable({
  providedIn: 'root'
})
export class PharmacyService {
  getAllpharmaciesByTag(arg0: any): any {
    throw new Error('Method not implemented.');
  }

  // constructor() { }
  // getAllListsByTag(tag: any): pharm[] {
  //   throw new Error('Method not implemented.');
  // }

  constructor() { }
  getPharmsById(id: number): pharm{
    return this.getAll().find(pharm => pharm.id == id)!;
  }
  
  getAllPharmaciesBySearchTerm(searchTerm:string) :pharm[]{
    return  this.getAll().filter(pharm =>
      pharm.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }
 

  
  getAll():pharm[]{
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
