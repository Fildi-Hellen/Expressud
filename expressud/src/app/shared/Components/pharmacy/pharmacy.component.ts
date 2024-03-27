// import { Component, OnInit } from '@angular/core';
// import { PharmacyService } from '../../../Services/pharmacy.service';
// import { ActivatedRoute } from '@angular/router';

// @Component({
//   selector: 'app-pharmacy',
 
//   templateUrl: './pharmacy.component.html',
//   styleUrls: ['./pharmacy.component.css']
// })
// export class PharmacyComponent implements OnInit{
//   foods: Food[] = [];
//   constructor(private foodService: FoodService, activatedRoute: ActivatedRoute) {
//     let foodsObservalbe:Observable<Food[]>;
//     activatedRoute.params.subscribe((params) => {
//       if (params.searchTerm)
//         foodsObservalbe = this.foodService.getAllFoodsBySearchTerm(params.searchTerm);
//       else if (params.tag)
//         foodsObservalbe = this.foodService.getAllFoodsByTag(params.tag);
//       else
//         foodsObservalbe = foodService.getAll();

//         foodsObservalbe.subscribe((serverFoods) => {
//           this.foods = serverFoods;
//         })
//     })
//   }

//   ngOnInit(): void {
//   }

// }
