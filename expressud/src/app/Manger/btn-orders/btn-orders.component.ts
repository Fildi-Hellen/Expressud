import { Component } from '@angular/core';

@Component({
  selector: 'app-btn-orders',
  templateUrl: './btn-orders.component.html',
  styleUrl: './btn-orders.component.css'
})
export class BtnOrdersComponent {
  
  constructor() { }

  updateOrderStatus(status: string) {
    // Here you can implement the logic based on the button information
    console.log('Order status updated to:', status);
    // For demonstration purposes, you can replace the console.log with your logic
  }
  
}
