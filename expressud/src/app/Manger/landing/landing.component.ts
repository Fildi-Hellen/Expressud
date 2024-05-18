import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BtnProcessComponent } from '../Shared/btn-process/btn-process.component';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {

  orders = [
    { orderId: '001', orderDate: '2024-05-01', deliveryTime: '10:00 AM', deliveryType: 'Express', paymentMethod: 'Credit Card', trackingStatus: 'In Transit' },
    { orderId: '002', orderDate: '2024-05-02', deliveryTime: '11:00 AM', deliveryType: 'Standard', paymentMethod: 'Cash on Delivery', trackingStatus: 'Delivered' },
    { orderId: '003', orderDate: '2024-05-03', deliveryTime: '12:00 PM', deliveryType: 'Express', paymentMethod: 'Online Transfer', trackingStatus: 'Out for Delivery' },
    // Add more orders as needed
  ];


  viewOrder(order: any) {
    // Logic to view the order details
    console.log('Viewing order:', order);
    // Implement your view order logic here
  }

  constructor(private dialogRef:MatDialog){}

  openDialog(){
    this.dialogRef.open(BtnProcessComponent);
  }
}

