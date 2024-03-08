import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../cart.service'
import { ListsService } from '../lists.service';
import { resturant } from '../shared/models/resturant';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent implements OnInit {

  resturant!: resturant;
  constructor(private activatedRoute:ActivatedRoute,
    private listsService: ListsService,
    private cartService: CartService,
    private router: Router) { 
    activatedRoute.params.subscribe((params) => {
      if(params['id'])
      this.resturant = listsService.getResturantsById(params['id']);
    })

  }

  ngOnInit(): void {
  }

  addToCart(){
    this.cartService.addToCart(this.resturant);
    this.router.navigateByUrl('/cart-page');
  }

}