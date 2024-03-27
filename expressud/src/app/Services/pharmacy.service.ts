import { Injectable } from '@angular/core';
import { pharm } from '../Shared1/models/pharm';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tag } from '../Shared1/models/Tag';
import { PHARMS_URL, PHARMS_BY_SEARCH_URL, PHARMS_TAGS_URL, PHARMS_BY_TAG_URL, PHARM_BY_ID_URL } from '../shared1/constants/urls';
// import{sample_pharms,sample_tags} from 'src/pharms';
@Injectable({
  providedIn: 'root'
})
export class PharmacyService {
  getAllPharmsByTag: any;
  getAllPharmsBySearchTerm(searchTerm: any): Observable<pharm[]> {
    throw new Error('Method not implemented.');
  }
  constructor(private http:HttpClient) { }

  getAll(): Observable<pharm[]> {
    return this.http.get<pharm[]>(PHARMS_URL);
  }

  getAllPHARMsBySearchTerm(searchTerm: string) {
    return this.http.get<pharm[]>(PHARMS_BY_SEARCH_URL + searchTerm);
  }

  getAllTags(): Observable<Tag[]> {
    return this.http.get<Tag[]>(PHARMS_TAGS_URL);
  }

  getAllPHARMsByTag(tag: string): Observable<pharm[]> {
    return tag === "All" ?
      this.getAll() :
      this.http.get<pharm[]>(PHARMS_BY_TAG_URL + tag);
  }

  getPHARMById(pharmId:string):Observable<pharm>{
    return this.http.get<pharm>(PHARM_BY_ID_URL + pharmId);
  }

}
