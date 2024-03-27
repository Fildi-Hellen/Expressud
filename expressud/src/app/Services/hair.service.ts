import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tag } from '../Shared1/models/Tag';
import { HAIRS_URL, HAIRS_BY_SEARCH_URL, HAIRS_TAGS_URL, HAIRS_BY_TAG_URL, HAIR_BY_ID_URL } from '../shared1/constants/urls';
import { Hair } from '../Shared1/models/hair';
// import{sample_hairs,sample_tags} from 'src/air';

@Injectable({
  providedIn: 'root'
})
export class HairService {
  getAllHairsByTag(tag: any): Observable<Hair[]> {
    throw new Error('Method not implemented.');
  }
  getAllHairsBySearchTerm(searchTerm: any): Observable<Hair[]> {
    throw new Error('Method not implemented.');
  }
  constructor(private http:HttpClient) { }

  getAll(): Observable<Hair[]> {
    return this.http.get<Hair[]>(HAIRS_URL);
  }

  getAllHAIRsBySearchTerm(searchTerm: string) {
    return this.http.get<Hair[]>(HAIRS_BY_SEARCH_URL + searchTerm);
  }

  getAllTags(): Observable<Tag[]> {
    return this.http.get<Tag[]>(HAIRS_TAGS_URL);
  }

  getAllHAIRsByTag(tag: string): Observable<Hair[]> {
    return tag === "All" ?
      this.getAll() :
      this.http.get<Hair[]>(HAIRS_BY_TAG_URL + tag);
  }

  getHAIRById(hairId:string):Observable<Hair>{
    return this.http.get<Hair>(HAIR_BY_ID_URL + hairId);
  }
}
