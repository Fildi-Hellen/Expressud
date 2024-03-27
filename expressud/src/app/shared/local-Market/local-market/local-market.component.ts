import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Super } from 'src/app/Shared1/models/super';
import {SupermarketService} from 'src/app/Services/supermarket.service';

@Component({
  selector: 'app-local-market',

  templateUrl: './local-market.component.html',
  styleUrls: ['./local-market.component.css']
})
export class LocalMarketComponent {
  supers: Super[] = [];
  constructor(private supermarketService: SupermarketService, activatedRoute: ActivatedRoute) {
    let supersObservalbe:Observable<Super[]>;
    activatedRoute.params.subscribe((params) => {
      if (params.searchTerm)
        supersObservalbe = this.supermarketService.getAllsupersBySearchTerm(params.searchTerm);
      else if (params.tag)
        supersObservalbe = this.supermarketService.getAllsupersByTag(params.tag);
      else
        supersObservalbe = supermarketService.getAll();

        supersObservalbe.subscribe((serverSupers) => {
          this.supers = serverSupers;
        })
    })
  }

  ngOnInit(): void {
  }

}
