import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MaeService } from '../mae.service';

@Component({
  selector: 'app-grocery',
  templateUrl: './grocery.component.html',
  styleUrls: ['./grocery.component.css']
})
export class GroceryComponent implements OnInit {
  mae: any;

  
  constructor(private maeService:MaeService,private route: ActivatedRoute){

  }
ngOnInit (): void {
  this.route.params.subscribe(params => {
    if (params['searchTerm'])
      this.mae = this.maeService.getAllMarketsBySearchTerm(params['searchTerm']);
    else if (params['tag'])
      this.mae = this.maeService.getAllMarketsByTag(params['tag']);
    else
this.mae=this.maeService.getAll();
})
}

}
