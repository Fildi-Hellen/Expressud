import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tag } from '../Shared1/models/Tag';
import { COSMETICS_URL, COSMETICS_BY_SEARCH_URL, COSMETICS_TAGS_URL, COSMETICS_BY_TAG_URL, COSMETIC_BY_ID_URL } from '../Shared1/constants/urls';
import { Cosmetic } from '../Shared1/models/cosmetic';
// import{sample_cosmetics,sample_tags} from 'src/cosme';

@Injectable({
  providedIn: 'root'
})
export class CosmeticService {
  constructor(private http:HttpClient) { }

  getAll(): Observable<Cosmetic[]> {
    return this.http.get<Cosmetic[]>(COSMETICS_URL);
  }

  getAllCosmeticsBySearchTerm(searchTerm: string) {
    return this.http.get<Cosmetic[]>(COSMETICS_BY_SEARCH_URL + searchTerm);
  }

  getAllTags(): Observable<Tag[]> {
    return this.http.get<Tag[]>(COSMETICS_TAGS_URL);
  }

  getAllCosmeticsByTag(tag: string): Observable<Cosmetic[]> {
    return tag === "All" ?
      this.getAll() :
      this.http.get<Cosmetic[]>(COSMETICS_BY_TAG_URL + tag);
  }

  getCosmeticById(cosmeticId:string):Observable<Cosmetic>{
    return this.http.get<Cosmetic>(COSMETIC_BY_ID_URL + cosmeticId);
  }
  

}
