// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-hair',
//   standalone: true,
//   imports: [],
//   templateUrl: './hair.component.html',
//   styleUrl: './hair.component.css'
// })
// export class HairComponent {
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
