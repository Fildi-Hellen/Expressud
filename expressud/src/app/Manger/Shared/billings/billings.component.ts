import { Component, OnInit } from '@angular/core';
import { BillingService } from '../../Services/billing.service';

@Component({
  selector: 'app-billings',
  templateUrl: './billings.component.html',
  styleUrl: './billings.component.css'
})
export class BillingsComponent  implements OnInit{

  acceptedBillingInfo: any;

  constructor(private billingService: BillingService) { }

  ngOnInit(): void {
    this.loadAcceptedBillingInfo();
  }

  loadAcceptedBillingInfo() {
    this.billingService.getAcceptedBillingInfo().subscribe(
      (      response: any) => {
        this.acceptedBillingInfo = response;
        console.log('Accepted billing info:', this.acceptedBillingInfo);
        // Handle success
      },
      (      error: any) => {
        console.error('Error fetching accepted billing info:', error);
        // Handle error
      }
    );

}
}
