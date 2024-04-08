import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tag } from '../Shared1/models/Tag';
import { Alcohol } from '../Shared1/models/alcohol';
import {ALCOHOLS_URL,ALCOHOLS_BY_SEARCH_URL,ALCOHOLS_TAGS_URL,ALCOHOL_BY_ID_URL,ALCOHOLS_BY_TAG_URL}from '../Shared1/constants/urls';

@Injectable({
  providedIn: 'root'
})
export class AlcoholService {
  static getAll: any;
  constructor(private http:HttpClient) { }

  getAll(): Observable<Alcohol[]> {
    return this.http.get<Alcohol[]>(ALCOHOLS_URL);
  }

  getAllAlcoholsBySearchTerm(searchTerm: string) {
    return this.http.get<Alcohol[]>(ALCOHOLS_BY_SEARCH_URL + searchTerm);
  }

  getAllTags(): Observable<Tag[]> {
    return this.http.get<Tag[]>(ALCOHOLS_TAGS_URL);
  }

  getAllAlcoholsByTag(tag: string): Observable<Alcohol[]> {
    return tag === "All" ?
      this.getAll() :
      this.http.get<Alcohol[]>(ALCOHOLS_BY_TAG_URL + tag);
  }

  getAlcoholById(alcoholId:string):Observable<Alcohol>{
    return this.http.get<Alcohol>(ALCOHOL_BY_ID_URL + alcoholId);
  }
  
}
