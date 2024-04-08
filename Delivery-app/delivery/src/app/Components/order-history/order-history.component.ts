import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../Services/order.service';
import { CommonModule } from '@angular/common';




@Component({
  selector: 'app-order-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order-history.component.html',
  styleUrl: './order-history.component.css'
})
export class OrderHistoryComponent implements OnInit {
  orders: any[] = [];

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.fetchOrderHistory();
  }

  fetchOrderHistory(): void {
    this.orderService.getOrderHistory()
      .subscribe(
        (data: any[]) => {
          this.orders = data;
        },
        error => {
          console.error('Error fetching order history:', error);
        }
      );
  }

}
