import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Real} from 'src/app/Shared1/models/real'
import { Tag } from '../Shared1/models/Tag';
//import{sample_reals,sample_tags} from 'src/estate';
import { REALS_URL, REALS_BY_SEARCH_URL, REALS_TAGS_URL, REALS_BY_TAG_URL, REAL_BY_ID_URL } from '../Shared1/constants/urls';

@Injectable({
  providedIn: 'root'
})
export class EstateService {

  constructor(private http:HttpClient) { }

  getAll(): Observable<Real[]> {
    return this.http.get<Real[]>(REALS_URL);
  }


  getAllRealsBySearchTerm(searchTerm: string) {
    return this.http.get<Real[]>(REALS_BY_SEARCH_URL + searchTerm);
  }

  getAllTags(): Observable<Tag[]> {
    return this.http.get<Tag[]>(REALS_TAGS_URL);
  }

  getAllRealsByTag(tag: string): Observable<Real[]> {
    return tag === "All" ?
      this.getAll() :
      this.http.get<Real[]>(REALS_BY_TAG_URL + tag);
  }

  getRealById(realId:string):Observable<Real>{
    return this.http.get<Real>(REAL_BY_ID_URL + realId);
  }
}
