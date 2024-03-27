import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MaeService } from 'src/app/Services/mae.service';
import {market} from 'src/app/Shared1/models/market';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-grocery',
  templateUrl: './grocery.component.html',
  styleUrls: ['./grocery.component.css']
})
export class GroceryComponent implements OnInit {
  markets: market[] = [];
  constructor(private maeService: MaeService, activatedRoute: ActivatedRoute) {
    let marketsObservalbe:Observable<market[]>;
    activatedRoute.params.subscribe((params) => {
      if (params.searchTerm)
        marketsObservalbe = this.maeService.getAllMarketsBySearchTerm(params.searchTerm);
      else if (params.tag)
        marketsObservalbe = this.maeService.getAllMarketsByTag(params.tag);
      else
        marketsObservalbe = MaeService.getAll();

        marketsObservalbe.subscribe((serverMarkets) => {
          this.markets = serverMarkets;
        })
    })
  }

  ngOnInit(): void {
  }

}
