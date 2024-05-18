import { Component } from '@angular/core';
import { Order } from 'src/app/Shared1/models/Order';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {
   
  orders: Order[] = [];
  options: google.maps.MapOptions = {
    mapId: "DEMO_MAP_ID",
    center: { lat: -31, lng: 147 },
    zoom: 4,
  };
  constructor() { }

  ngOnInit(): void {
    // Fetch orders with destinations from backend
    this.fetchOrdersWithDestinations();
  }

  fetchOrdersWithDestinations(): void {
    // Assuming you have an API endpoint to fetch orders with destinations
    // Example: this.orderService.getOrdersWithDestinations()
    //   .subscribe((orders: Order[]) => {
    //     this.orders = orders;
    //   });
  }
}
