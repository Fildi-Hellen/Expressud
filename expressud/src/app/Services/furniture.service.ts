import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tag } from '../Shared1/models/Tag';
import { FURNITURES_URL, FURNITURES_BY_SEARCH_URL, FURNITURES_TAGS_URL, FURNITURES_BY_TAG_URL, FURNITURE_BY_ID_URL } from '../shared1/constants/urls';
import { Furniture } from '../Shared1/models/furniture';
// import{sample_furnitures,sample_tags} from 'src/furn';
@Injectable({
  providedIn: 'root'
})
export class FurnitureService {
  getAllFurnituresBySearchTerm: any;
  getAllFurnituresByTag: any;
  constructor(private http:HttpClient) { }

  getAll(): Observable<Furniture[]> {
    return this.http.get<Furniture[]>(FURNITURES_URL);
  }

  getAllFURNITUREsBySearchTerm(searchTerm: string) {
    return this.http.get<Furniture[]>(FURNITURES_BY_SEARCH_URL + searchTerm);
  }

  getAllTags(): Observable<Tag[]> {
    return this.http.get<Tag[]>(FURNITURES_TAGS_URL);
  }

  getAllFURNITUREsByTag(tag: string): Observable<Furniture[]> {
    return tag === "All" ?
      this.getAll() :
      this.http.get<Furniture[]>(FURNITURES_BY_TAG_URL + tag);
  }

  getFURNITUREById(furnitureId:string):Observable<Furniture>{
    return this.http.get<Furniture>(FURNITURE_BY_ID_URL + furnitureId);
  }
}
