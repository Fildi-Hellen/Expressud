import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tag } from '../Shared1/models/Tag';
import { Boutique } from '../Shared1/models/boutique';
import { BOUTIQUES_URL, BOUTIQUES_BY_SEARCH_URL, BOUTIQUES_TAGS_URL, BOUTIQUES_BY_TAG_URL, BOUTIQUE_BY_ID_URL } from '../Shared1/constants/urls';
//  import{sample_boutiques,sample_tags} from 'src/bout'

@Injectable({
  providedIn: 'root'
})
export class BoutiqueService {
  constructor(private http:HttpClient) { }

  getAll(): Observable<Boutique[]> {
    return this.http.get<Boutique[]>(BOUTIQUES_URL);
  }

  getAllBoutiquesBySearchTerm(searchTerm: string) {
    return this.http.get<Boutique[]>(BOUTIQUES_BY_SEARCH_URL + searchTerm);
  }

  getAllTags(): Observable<Tag[]> {
    return this.http.get<Tag[]>(BOUTIQUES_TAGS_URL);
  }

  getAllBoutiquesByTag(tag: string): Observable<Boutique[]> {
    return tag === "All" ?
      this.getAll() :
      this.http.get<Boutique[]>(BOUTIQUES_BY_TAG_URL + tag);
  }

  getBoutiqueById(boutiqueId:string):Observable<Boutique>{
    return this.http.get<Boutique>(BOUTIQUE_BY_ID_URL + boutiqueId);
  }
  

}
