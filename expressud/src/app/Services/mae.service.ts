// import { Injectable } from '@angular/core';
// import { market } from '../Shared1/models/market'

// @Injectable({
//   providedIn: 'root'
// })
// export class MaeService {
//   constructor(private http:HttpClient) { }

//   getAll(): Observable<Food[]> {
//     return this.http.get<Food[]>(FOODS_URL);
//   }

//   getAllFoodsBySearchTerm(searchTerm: string) {
//     return this.http.get<Food[]>(FOODS_BY_SEARCH_URL + searchTerm);
//   }

//   getAllTags(): Observable<Tag[]> {
//     return this.http.get<Tag[]>(FOODS_TAGS_URL);
//   }

//   getAllFoodsByTag(tag: string): Observable<Food[]> {
//     return tag === "All" ?
//       this.getAll() :
//       this.http.get<Food[]>(FOODS_BY_TAG_URL + tag);
//   }

//   getFoodById(foodId:string):Observable<Food>{
//     return this.http.get<Food>(FOOD_BY_ID_URL + foodId);
//   }

// }
