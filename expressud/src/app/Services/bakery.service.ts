import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tag } from '../Shared1/models/Tag';
import { Bakery } from '../Shared1/models/bakery';
// import{sample_bakerys,sample_tags} from 'src/bake'
import { BAKERYS_URL, BAKERYS_BY_SEARCH_URL, BAKERYS_TAGS_URL, BAKERYS_BY_TAG_URL, BAKERY_BY_ID_URL } from '../Shared1/constants/urls';

@Injectable({
  providedIn: 'root'
})
export class BakeryService {
  static getAll: any;
  constructor(private http:HttpClient) { }

  getAll(): Observable<Bakery[]> {
    return this.http.get<Bakery[]>(BAKERYS_URL);
  }

  getAllBakerysBySearchTerm(searchTerm: string) {
    return this.http.get<Bakery[]>(BAKERYS_BY_SEARCH_URL + searchTerm);
  }

  getAllTags(): Observable<Tag[]> {
    return this.http.get<Tag[]>(BAKERYS_TAGS_URL);
  }

  getAllBakerysByTag(tag: string): Observable<Bakery[]> {
    return tag === "All" ?
      this.getAll() :
      this.http.get<Bakery[]>(BAKERYS_BY_TAG_URL + tag);
  }

  getBakeryById(bakeryId:string):Observable<Bakery>{
    return this.http.get<Bakery>(BAKERY_BY_ID_URL + bakeryId);
  }
  
}
