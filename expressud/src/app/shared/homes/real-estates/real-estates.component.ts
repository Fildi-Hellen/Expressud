import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Real } from 'src/app/Shared1/models/real';
import {EstateService} from 'src/app/Services/estate.service'

@Component({
  selector: 'app-real-estates',

  templateUrl: './real-estates.component.html',
  styleUrls: ['./real-estates.component.css']
})
export class RealEstatesComponent {

  reals: Real[] = [];
  constructor(private estateService: EstateService, activatedRoute: ActivatedRoute) {
    let realsObservalbe:Observable<Real[]>;
    activatedRoute.params.subscribe((params) => {
      if (params.searchTerm)
        realsObservalbe = this.estateService.getAllRealsBySearchTerm(params.searchTerm);
      else if (params.tag)
        realsObservalbe = this.estateService.getAllRealsByTag(params.tag);
      else
        realsObservalbe = estateService.getAll();

        realsObservalbe.subscribe((serverReals) => {
          this.reals = serverReals;
        })
    })
  }

  ngOnInit(): void {
  }
}
