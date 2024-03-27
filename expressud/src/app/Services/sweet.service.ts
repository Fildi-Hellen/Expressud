import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tag } from '../Shared1/models/Tag';
import { SWEETS_URL, SWEETS_BY_SEARCH_URL, SWEETS_TAGS_URL, SWEETS_BY_TAG_URL, SWEET_BY_ID_URL } from '../shared1/constants/urls';
import { Sweet } from '../Shared1/models/sweet';
// import{sample_sweets,sample_tags} from 'src/sweete';
@Injectable({
  providedIn: 'root'
})
export class SweetService {
  getAllSweetsBySearchTerm: any;
  getAllSweetsByTag: any;
  constructor(private http:HttpClient) { }

  getAll(): Observable<Sweet[]> {
    return this.http.get<Sweet[]>(SWEETS_URL);
  }

  getAllSWEETsBySearchTerm(searchTerm: string) {
    return this.http.get<Sweet[]>(SWEETS_BY_SEARCH_URL + searchTerm);
  }

  getAllTags(): Observable<Tag[]> {
    return this.http.get<Tag[]>(SWEETS_TAGS_URL);
  }

  getAllSWEETsByTag(tag: string): Observable<Sweet[]> {
    return tag === "All" ?
      this.getAll() :
      this.http.get<Sweet[]>(SWEETS_BY_TAG_URL + tag);
  }

  getSWEETById(sweetId:string):Observable<Sweet>{
    return this.http.get<Sweet>(SWEET_BY_ID_URL + sweetId);
  }
}
