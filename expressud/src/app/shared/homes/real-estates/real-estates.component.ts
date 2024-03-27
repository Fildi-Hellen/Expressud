// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-real-estates',
//   // standalone: true,
//   // imports: [],
//   templateUrl: './real-estates.component.html',
//   styleUrls: ['./real-estates.component.css']
// })
// export class RealEstatesComponent {

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
