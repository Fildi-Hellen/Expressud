import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {FoodService} from 'src/app/Services/food.service';
import { ActivatedRoute } from '@angular/router';
import { Food } from 'src/app/Shared1/models/Food';


@Component({
  selector: 'app-resturants',
  templateUrl: './resturants.component.html',
  styleUrls:[ './resturants.component.css']
})
export class ResturantsComponent implements OnInit {
  foods: Food[] = [];
  constructor(private foodService: FoodService, activatedRoute: ActivatedRoute) {
    let foodsObservalbe:Observable<Food[]>;
    activatedRoute.params.subscribe((params) => {
      if (params.searchTerm)
        foodsObservalbe = this.foodService.getAllFoodsBySearchTerm(params.searchTerm);
      else if (params.tag)
        foodsObservalbe = this.foodService.getAllFoodsByTag(params.tag);
      else
        foodsObservalbe = foodService.getAll();

        foodsObservalbe.subscribe((serverFoods) => {
          this.foods = serverFoods;
        })
    })
  }

  ngOnInit(): void {
  }

}
