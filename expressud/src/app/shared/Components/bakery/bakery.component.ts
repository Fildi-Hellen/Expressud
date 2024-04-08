import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {BakeryService} from 'src/app/Services/bakery.service';
import { ActivatedRoute } from '@angular/router';
import { Bakery } from 'src/app/Shared1/models/bakery'

@Component({
  selector: 'app-bakery',
  templateUrl: './bakery.component.html',
  styleUrls: ['./bakery.component.css']
})
export class BakeryComponent implements OnInit {

  bakerys: Bakery[] = [];

  constructor(private bakeryService: BakeryService, activatedRoute: ActivatedRoute) {
    let BakerysObservalbe:Observable<Bakery[]>;
    activatedRoute.params.subscribe((params) => {
      if (params.searchTerm)
        BakerysObservalbe = this.bakeryService.getAllBakerysBySearchTerm(params.searchTerm);
      else if (params.tag)
        BakerysObservalbe = this.bakeryService.getAllBakerysByTag(params.tag);
      else
        BakerysObservalbe = BakeryService.getAll();

        BakerysObservalbe.subscribe((serverBakerys) => {
          this.bakerys = serverBakerys;
        })
    })
  }

  ngOnInit(): void {
  }

}



