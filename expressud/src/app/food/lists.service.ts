import { Injectable } from '@angular/core';
import { resturant } from './shared/models/resturant';
import { Tag } from './shared/models/tag';
@Injectable({
  providedIn: 'root'
})
export class ListsService {

  getAllListsByTag(tag: any): resturant[] {
    throw new Error('Method not implemented.');
  }

  constructor() { }
  getResturantsById(id: number): resturant{
    return this.getAll().find(resturant => resturant.id == id)!;
  }
  
  getAllListsBySearchTerm(searchTerm:string) :resturant[]{
    return  this.getAll().filter(resturant =>
      resturant.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }
  getAllTags(): Tag[] {
    return [
      { name: 'All', count: 14 },
      { name: 'FastFood', count: 4 },
      { name: 'Pizza', count: 2 },
      { name: 'Lunch', count: 3 },
      { name: 'SlowFood', count: 2 },
      { name: 'Hamburger', count: 1 },
      { name: 'Fry', count: 1 },
      { name: 'Soup', count: 1 },
    ];
  }

  getAllResturantsByTag(tag: string): resturant[] {
    return tag == "All" ?
      this.getAll() :
      this.getAll().filter(food => food.tags?.includes(tag));
  }
  getAll():resturant[]{
    return[
    {
      id:1,
      name:'Burger King',
      price:10,
      tags:['FastFood','Lunch','Burger'],
      favorite:false,
      stars:2,
      imageUrl:'assets/img/food/burger.jpg',
      cookTime:'15-30'
    },
    {
      id:2,
      name:'Sudanese Food',
      price:15,
      tags:['wholefood','Lunch','local food'],
      favorite:true,
      stars:3,
      imageUrl:'assets/img/food/fool.jpg',
      cookTime:'20-30'
    },
    {
      id:3,
      name:'Turkish Resturant',
      price:30,
      tags:['FastFood','Lunch','meal'],
      favorite:true,
      stars:4,
      imageUrl:'assets/img/food/magic-foods.jpg',
      cookTime:'30-35'
    },
    {
      id:4,
      name:'Commrands',
      price:20,
      tags:['Food','Lunch','dinner'],
      favorite:false,
      stars:2,
      imageUrl:'assets/img/food/meal1.jpg',
      cookTime:'15-30'
    },
    {
      id:5,
      name:'Notos',
      price:15,
      tags:['FastFood','Lunch','Meat'],
      favorite:false,
      stars:4,
      imageUrl:'assets/img/food/meat.webp',
      cookTime:'15-30'
    },
    {
      id:6,
      name:'Pyramid Resturant',
      price:15,
      tags:['FastFood','Lunch','wholemeal'],
      favorite:false,
      stars:2,
      imageUrl:'assets/img/food/menu.webp',
      cookTime:'15-30'
    },
    {
      id:7,
      name:'Local Foods',
      price:20,
      tags:['wholemeal','Lunch','dinner'],
      favorite:true,
      stars:4,
      imageUrl:'assets/img/food/Molokhia.jpg',
      cookTime:'15-30'
    },
    {
      id:8,
      name:'Pizza Huts',
      price:15,
      tags:['FastFood','Lunch','Piza'],
      favorite:false,
      stars:3,
      imageUrl:'assets/img/food/pizza1.jpg',
      cookTime:'15-30'
    }
      
    ]
  }
}
