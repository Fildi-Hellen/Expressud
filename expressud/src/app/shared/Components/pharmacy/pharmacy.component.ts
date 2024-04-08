import { Component, OnInit } from '@angular/core';
import { PharmacyService } from 'src/app/Services/pharmacy.service'
import { ActivatedRoute } from '@angular/router';
import { Pharm } from 'src/app/Shared1/models/pharm';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pharmacy',
 
  templateUrl: './pharmacy.component.html',
  styleUrls: ['./pharmacy.component.css']
})
export class PharmacyComponent implements OnInit{
  pharms: Pharm[] = [];
  constructor(private pharmacyService: PharmacyService, activatedRoute: ActivatedRoute) {
    let PharmsObservalbe:Observable<Pharm[]>;
    activatedRoute.params.subscribe((params) => {
      if (params.searchTerm)
        PharmsObservalbe = this.pharmacyService.getAllPharmsBySearchTerm(params.searchTerm);
      else if (params.tag)
        PharmsObservalbe = this.pharmacyService.getAllPharmsByTag(params.tag);
      else
        PharmsObservalbe = pharmacyService.getAll();

        PharmsObservalbe.subscribe((serverPharms) => {
          this.pharms = serverPharms;
        })
    })
  }

  ngOnInit(): void {
  }

}
