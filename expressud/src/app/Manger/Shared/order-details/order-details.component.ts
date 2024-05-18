import { Component } from '@angular/core';
import { OrderService } from 'src/app/Services/order.service';
import { Order } from 'src/app/Shared1/models/Order';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrl: './order-details.component.css'
})
export class OrderDetailsComponent {

  orderDetails!: Order;

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.fetchOrderDetails();
  }

  fetchOrderDetails(): void {
    const orderId = 123; // Replace with the actual order ID
    this.orderService.getOrderDetails(orderId).subscribe(order => {
      this.orderDetails = order;
    });
  }

}
