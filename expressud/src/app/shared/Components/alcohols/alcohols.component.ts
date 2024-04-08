import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AlcoholService } from 'src/app/Services/alcohol.service';
import { Alcohol } from 'src/app/Shared1/models/alcohol';

@Component({
  selector: 'app-alcohols',
  templateUrl: './alcohols.component.html',
  styleUrl: './alcohols.component.css'
})
export class AlcoholsComponent {
  Alcohols: Alcohol[] = [];

  constructor(private alcoholService: AlcoholService, activatedRoute: ActivatedRoute) {
    let AlcoholsObservalbe:Observable<Alcohol[]>;
    activatedRoute.params.subscribe((params) => {
      if (params.searchTerm)
        AlcoholsObservalbe = this.alcoholService.getAllAlcoholsBySearchTerm(params.searchTerm);
      else if (params.tag)
        AlcoholsObservalbe = this.alcoholService.getAllAlcoholsByTag(params.tag);
      else
        AlcoholsObservalbe = AlcoholService.getAll();

        AlcoholsObservalbe.subscribe((serverAlcohols) => {
          this.Alcohols = serverAlcohols;
        })
    })
  }

  ngOnInit(): void {
  }

}
