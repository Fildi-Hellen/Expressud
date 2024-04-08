import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../Services/order.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-order-request',
  standalone: true,
  imports: [ CommonModule,
    HttpClientModule ],
  templateUrl: './order-request.component.html',
  styleUrl: './order-request.component.css'
})
export class OrderRequestComponent implements OnInit{
  orderRequests: any[] = [];

  constructor(private orderservice: OrderService) { }

  ngOnInit(): void {
    this.fetchOrderRequests();
  }

  fetchOrderRequests(): void {
    this.orderservice.getOrderRequests()
      .subscribe(
        (data: any[]) => {
          this.orderRequests = data;
        },
        error => {
          console.error('Error fetching order requests:', error);
        }
      );
  }

  acceptOrder(orderId: string): void {
    // Implement logic to accept order
  }

  rejectOrder(orderId: string): void {
    // Implement logic to reject order
  }


}
