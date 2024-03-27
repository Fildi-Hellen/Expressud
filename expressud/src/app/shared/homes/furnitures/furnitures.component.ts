import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Furniture } from 'src/app/Shared1/models/furniture';
import {FurnitureService} from 'src/app/Services/furniture.service';

@Component({
  selector: 'app-furnitures',
  templateUrl: './furnitures.component.html',
  styleUrls: ['./furnitures.component.css']
})

export class FurnituresComponent implements OnInit {
  furnitures: Furniture[] = [];
  constructor(private furnitureService: FurnitureService, activatedRoute: ActivatedRoute) {
    let furnituresObservalbe:Observable<Furniture[]>;
    activatedRoute.params.subscribe((params) => {
      if (params.searchTerm)
        furnituresObservalbe = this.furnitureService.getAllFurnituresBySearchTerm(params.searchTerm);
      else if (params.tag)
        furnituresObservalbe = this.furnitureService.getAllFurnituresByTag(params.tag);
      else
        furnituresObservalbe = furnitureService.getAll();

        furnituresObservalbe.subscribe((serverFurnitures) => {
          this.furnitures = serverFurnitures;
        })
    })
  }

  ngOnInit(): void {
  }

}
