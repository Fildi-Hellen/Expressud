import { Component, OnInit } from '@angular/core';
import { PharmacyService } from '../../../Services/pharmacy.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pharmacy',
  // standalone: true,
  // imports: [],
  templateUrl: './pharmacy.component.html',
  styleUrls: ['./pharmacy.component.css']
})
export class PharmacyComponent implements OnInit{
  pharmacy: any;
  constructor(private pharmacyservice:PharmacyService,private route: ActivatedRoute){

  }
ngOnInit (): void {
  this.route.params.subscribe(params => {
    if (params['searchTerm'])
      this.pharmacy = this.pharmacyservice.getAllPharmaciesBySearchTerm(params['searchTerm']);
    else if (params['tag'])
      this.pharmacy = this.pharmacyservice.getAllpharmaciesByTag(params['tag']);
    else
this.pharmacy=this.pharmacyservice.getAll();
})
}

}
