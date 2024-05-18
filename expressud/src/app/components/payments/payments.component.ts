import { Component } from '@angular/core';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrl: './payments.component.css'
})
export class PaymentsComponent {
  selectedPaymentMethod: string = ''; 
  paymentMethods: string[] = ['Credit Card', 'Debit Card', 'PayPal', 'Bank Transfer','pay with cash'];
}

