import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tag } from '../Shared1/models/Tag';
import { HAIRS_URL, HAIRS_BY_SEARCH_URL, HAIRS_TAGS_URL, HAIRS_BY_TAG_URL, HAIR_BY_ID_URL } from '../Shared1/constants/urls';
import { Hair } from '../Shared1/models/hair';
// import{sample_hairs,sample_tags} from 'src/air';

@Injectable({
  providedIn: 'root'
})
export class HairService {
  constructor(private http:HttpClient) { }

  getAll(): Observable<Hair[]> {
    return this.http.get<Hair[]>(HAIRS_URL);
  }

  getAllHairsBySearchTerm(searchTerm: string) {
    return this.http.get<Hair[]>(HAIRS_BY_SEARCH_URL + searchTerm);
  }

  getAllTags(): Observable<Tag[]> {
    return this.http.get<Tag[]>(HAIRS_TAGS_URL);
  }

  getAllHairsByTag(tag: string): Observable<Hair[]> {
    return tag === "All" ?
      this.getAll() :
      this.http.get<Hair[]>(HAIRS_BY_TAG_URL + tag);
  }

  getHairById(hairId:string):Observable<Hair>{
    return this.http.get<Hair>(HAIR_BY_ID_URL + hairId);
  }
  

}
