import { Component, Input, OnInit } from '@angular/core';
import { ListsService } from '../lists.service';
import { Tag } from '../shared/models/tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {

  @Input()
  ListsPageTags?:string[];

  @Input()
  justifyContent:string = 'center';

  tags?:Tag[];

  constructor(private listsService:ListsService) { }

  ngOnInit(): void {
    if(!this.ListsPageTags)
     this.tags = this.listsService.getAllTags();
  }

}