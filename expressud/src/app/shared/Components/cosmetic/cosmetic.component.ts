// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-cosmetic',
//   standalone: true,
//   imports: [],
//   templateUrl: './cosmetic.component.html',
//   styleUrl: './cosmetic.component.css'
// })
// export class CosmeticComponent {
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

// }
