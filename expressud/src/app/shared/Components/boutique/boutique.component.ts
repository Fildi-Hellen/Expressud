import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Boutique } from 'src/app/Shared1/models/boutique';
import {BoutiqueService} from 'src/app/Services/boutique.service';

@Component({
  selector: 'app-boutique',
  templateUrl: './boutique.component.html',
  styleUrls: ['./boutique.component.css']
})
export class BoutiqueComponent  implements OnInit{
  boutiques: Boutique[] = [];
  constructor(private boutiqueService: BoutiqueService, activatedRoute: ActivatedRoute) {
    let boutiquesObservalbe:Observable<Boutique[]>;
    activatedRoute.params.subscribe((params) => {
      if (params.searchTerm)
        boutiquesObservalbe = this.boutiqueService.getAllBoutiquesBySearchTerm(params.searchTerm);
      else if (params.tag)
        boutiquesObservalbe = this.boutiqueService.getAllBoutiquesByTag(params.tag);
      else
        boutiquesObservalbe = boutiqueService.getAll();

        boutiquesObservalbe.subscribe((serverboutiques) => {
          this.boutiques = serverboutiques;
        })
    })
  }

  ngOnInit(): void {
  }

}
