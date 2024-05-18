import { Component } from '@angular/core';
import { Driver } from '../../Models/drivers';
import { DriverService } from '../../Services/driver.service';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrl: './driver.component.css'
})
export class DriverComponent {
  drivers!: Driver[];
  deliveryId!: number; 

  constructor(private driverService: DriverService) {}

  ngOnInit(): void {
    this.getDrivers();
  }

  getDrivers(): void {
    this.driverService.getDrivers().subscribe(drivers => this.drivers = drivers);
  }

  assignDriver(deliveryId: number, driverId: number): void {
    this.driverService.assignDriver(deliveryId, driverId).subscribe(() => {
      // Handle success or error
    });
  }
}
