import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tag } from '../Shared1/models/Tag';
import { SUPERMARKETS_URL, SUPERMARKETS_BY_SEARCH_URL, SUPERMARKETS_TAGS_URL, SUPERMARKETS_BY_TAG_URL, SUPERMARKET_BY_ID_URL } from '../Shared1/constants/urls';
import { Super } from '../Shared1/models/super';
// import{sample_supermarkets,sample_tags} from 'src/supers'
@Injectable({
  providedIn: 'root'
})
export class SupermarketService {

  constructor(private http:HttpClient) { }

  getAll(): Observable<Super[]> {
    return this.http.get<Super[]>(SUPERMARKETS_URL);
  }

  getAllSupersBySearchTerm(searchTerm: string) {
    return this.http.get<Super[]>(SUPERMARKETS_BY_SEARCH_URL + searchTerm);
  }

  getAllTags(): Observable<Tag[]> {
    return this.http.get<Tag[]>(SUPERMARKETS_TAGS_URL);
  }

  getAllSupersByTag(tag: string): Observable<Super[]> {
    return tag === "All" ?
      this.getAll() :
      this.http.get<Super[]>(SUPERMARKETS_BY_TAG_URL + tag);
  }

  getSuperById(superId:string):Observable<Super>{
    return this.http.get<Super>(SUPERMARKET_BY_ID_URL + superId);
  }
}
