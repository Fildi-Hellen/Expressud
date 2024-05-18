import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/Services/category.service';
import { FoodService } from 'src/app/Services/food.service';


@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.css']
})
export class FoodsComponent implements OnInit {

  categories: any[] = [];

  constructor(private categoryService: CategoryService,private router:Router) {}

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories() {
    this.categoryService.getCategories().subscribe((data) => {
      this.categories = data;
    });
  }
  navigateToRestaurantFoods(categoryId:number) {
    this.router.navigate(['/restaurant-food-item',categoryId]) 
  }

}
