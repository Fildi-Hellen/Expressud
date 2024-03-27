import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Hair } from 'src/app/Shared1/models/hair';
import {HairService} from 'src/app/Services/hair.service';

@Component({
  selector: 'app-hair',
  templateUrl: './hair.component.html',
  styleUrls: ['./hair.component.css']
})
export class HairComponent  implements OnInit{
  hairs: Hair[] = [];
  constructor(private hairService: HairService, activatedRoute: ActivatedRoute) {
    let HairsObservalbe:Observable<Hair[]>;
    activatedRoute.params.subscribe((params) => {
      if (params.searchTerm)
        HairsObservalbe = this.hairService.getAllHairsBySearchTerm(params.searchTerm);
      else if (params.tag)
        HairsObservalbe = this.hairService.getAllHairsByTag(params.tag);
      else
        HairsObservalbe = hairService.getAll();

        HairsObservalbe.subscribe((serverHairs) => {
          this.hairs = serverHairs;
        })
    })
  }

  ngOnInit(): void {
  }

}
