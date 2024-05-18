import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.css'
})
export class FiltersComponent {
  @Output() filterByOrderDate = new EventEmitter<string>();
  @Output() filterByDeliveryDate = new EventEmitter<string>();
  @Output() showPreOrders = new EventEmitter<void>();
  @Output() logout = new EventEmitter<void>();

  orderDateFilters: string[] = ['Today', 'This Week', 'This Month'];
  deliveryDateFilters: string[] = ['Today', 'This Week', 'This Month'];

  constructor() { }

  onOrderDateChange(event: any) {
    const filter = event.target.value;
    this.filterByOrderDate.emit(filter);
  }

  onDeliveryDateChange(event: any) {
    const filter = event.target.value;
    this.filterByDeliveryDate.emit(filter);
  }

  onShowPreOrders() {
    this.showPreOrders.emit();
  }

  onLogout() {
    this.logout.emit();
  }
}
