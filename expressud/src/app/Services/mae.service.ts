import { Injectable } from '@angular/core';
import { market } from '../Shared1/models/market'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tag } from '../Shared1/models/Tag';
import { MARKETS_URL, MARKETS_BY_SEARCH_URL, MARKETS_TAGS_URL, MARKETS_BY_TAG_URL, MARKET_BY_ID_URL } from '../shared1/constants/urls';
// import{sample_markets,sample_tags} from 'src/mark';

@Injectable({
  providedIn: 'root'
})
export class MaeService {
  getAllMarketsByTag: any;
  static getAll: any;
  getAllMarketsBySearchTerm(searchTerm: any): Observable<market[]> {
    throw new Error('Method not implemented.');
  }
  constructor(private http:HttpClient) { }

  getAll(): Observable<market[]> {
    return this.http.get<market[]>(MARKETS_URL);
  }

  getAllMARKETsBySearchTerm(searchTerm: string) {
    return this.http.get<market[]>(MARKETS_BY_SEARCH_URL + searchTerm);
  }

  getAllTags(): Observable<Tag[]> {
    return this.http.get<Tag[]>(MARKETS_TAGS_URL);
  }

  getAllMARKETsByTag(tag: string): Observable<market[]> {
    return tag === "All" ?
      this.getAll() :
      this.http.get<market[]>(MARKETS_BY_TAG_URL + tag);
  }

  getMARKETById(marketId:string):Observable<market>{
    return this.http.get<market>(MARKET_BY_ID_URL + marketId);
  }

}
