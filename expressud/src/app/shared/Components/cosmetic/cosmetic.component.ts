import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Cosmetic } from 'src/app/Shared1/models/cosmetic';
import {CosmeticService, } from 'src/app/Services/cosmetic.service';

@Component({
  selector: 'app-cosmetic',
  templateUrl: './cosmetic.component.html',
  styleUrls: ['./cosmetic.component.css']
})
export class CosmeticComponent implements OnInit {
  cosmetics: Cosmetic[] = [];
  constructor(private cosmeticService: CosmeticService, activatedRoute: ActivatedRoute) {
    let cosmeticsObservalbe:Observable<Cosmetic[]>;
    activatedRoute.params.subscribe((params) => {
      if (params.searchTerm)
        cosmeticsObservalbe = this.cosmeticService.getAllCosmeticsBySearchTerm(params.searchTerm);
      else if (params.tag)
        cosmeticsObservalbe = this.cosmeticService.getAllCosmeticsByTag(params.tag);
      else
        cosmeticsObservalbe = cosmeticService.getAll();

        cosmeticsObservalbe.subscribe((servercosmetics) => {
          this.cosmetics = servercosmetics;
        })
    })
   
    }

    ngOnInit(): void {

}   
}

  

