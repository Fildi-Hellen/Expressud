import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import {SweetService} from 'src/app/Services/sweet.service'
import { Sweet } from 'src/app/Shared1/models/sweet';

@Component({
  selector: 'app-sweets',
  templateUrl: './sweets.component.html',
  styleUrls: ['./sweets.component.css' ]
})
export class SweetsComponent {
  sweets: Sweet[] = [];
  constructor(private sweetService: SweetService, activatedRoute: ActivatedRoute) {
    let sweetsObservalbe:Observable<Sweet[]>;
    activatedRoute.params.subscribe((params) => {
      if (params.searchTerm)
        sweetsObservalbe = this.sweetService.getAllSweetsBySearchTerm(params.searchTerm);
      else if (params.tag)
        sweetsObservalbe = this.sweetService.getAllSweetsByTag(params.tag);
      else
        sweetsObservalbe = sweetService.getAll();

        sweetsObservalbe.subscribe((serversweets) => {
          this.sweets = serversweets;
        })
    })
  }

  ngOnInit(): void {
  }

}
