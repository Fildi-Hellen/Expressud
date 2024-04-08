import { Injectable } from '@angular/core';
import { Pharm } from '../Shared1/models/pharm';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tag } from '../Shared1/models/Tag';
import { PHARMS_URL, PHARMS_BY_SEARCH_URL, PHARMS_TAGS_URL, PHARMS_BY_TAG_URL, PHARM_BY_ID_URL } from '../Shared1/constants/urls';
// import{sample_pharms,sample_tags} from 'src/pharms';
@Injectable({
  providedIn: 'root'
})
export class PharmacyService {
  constructor(private http:HttpClient) { }

  getAll(): Observable<Pharm[]> {
    return this.http.get<Pharm[]>(PHARMS_URL);
  }

  getAllPharmsBySearchTerm(searchTerm: string) {
    return this.http.get<Pharm[]>(PHARMS_BY_SEARCH_URL + searchTerm);
  }

  getAllTags(): Observable<Tag[]> {
    return this.http.get<Tag[]>(PHARMS_TAGS_URL);
  }

  getAllPharmsByTag(tag: string): Observable<Pharm[]> {
    return tag === "All" ?
      this.getAll() :
      this.http.get<Pharm[]>(PHARMS_BY_TAG_URL + tag);
  }

  getPharmById(pharmId:string):Observable<Pharm>{
    return this.http.get<Pharm>(PHARM_BY_ID_URL + pharmId);
  }
  
}
