import { Component, OnInit } from '@angular/core';
import { ListsService } from '../lists.service';
import { resturant } from '../shared/models/resturant';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resturants',
  // standalone: true,
  // imports: [],
  templateUrl: './resturants.component.html',
  styleUrls:[ './resturants.component.css']
})
export class ResturantsComponent implements OnInit {
[x: string]: any;
  lists:resturant[]=[]
  constructor(private listsservice:ListsService,private route: ActivatedRoute){

  }
ngOnInit (): void {
  this.route.params.subscribe(params => {
    if (params['searchTerm'])
      this.lists = this.listsservice.getAllListsBySearchTerm(params.searchTerm);
    else if (params['tag'])
      this.lists = this.listsservice.getAllListsByTag(params['tag']);
    else
this.lists=this.listsservice.getAll();
})
}
}
