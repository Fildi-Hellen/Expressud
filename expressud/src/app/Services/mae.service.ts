import { Injectable } from '@angular/core';
import { Market,  } from '../Shared1/models/market'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tag } from '../Shared1/models/Tag';
import { MARKETS_URL, MARKETS_BY_SEARCH_URL, MARKETS_TAGS_URL, MARKETS_BY_TAG_URL, MARKET_BY_ID_URL } from '../Shared1/constants/urls';
// import{sample_markets,sample_tags} from 'src/mark';

@Injectable({
  providedIn: 'root'
})
export class MaeService {
  static getAll: any;
  
  constructor(private http:HttpClient) { }

  getAll(): Observable<Market[]> {
    return this.http.get<Market[]>(MARKETS_URL);
  }

  getAllMarketsBySearchTerm(searchTerm: string) {
    return this.http.get<Market[]>(MARKETS_BY_SEARCH_URL + searchTerm);
  }

  getAllTags(): Observable<Tag[]> {
    return this.http.get<Tag[]>(MARKETS_TAGS_URL);
  }

  getAllMarketsByTag(tag: string): Observable<Market[]> {
    return tag === "All" ?
      this.getAll() :
      this.http.get<Market[]>(MARKETS_BY_TAG_URL + tag);
  }

  getMarketById(marketId:string):Observable<Market>{
    return this.http.get<Market>(MARKET_BY_ID_URL + marketId);
  }

}
