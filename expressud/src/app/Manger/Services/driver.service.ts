import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Driver } from '../Models/drivers';

@Injectable({
  providedIn: 'root'
})
export class DriverService {
  private apiUrl = 'your-api-url/drivers'; // Replace this with your API endpoint for drivers

  constructor(private http: HttpClient) {}

  getDrivers(): Observable<Driver[]> {
    return this.http.get<Driver[]>(this.apiUrl);
  }

  assignDriver(deliveryId: number, driverId: number): Observable<any> {
    // Implement logic to assign a driver to a delivery
    // This could involve updating the delivery record in the database
    // and setting the driverId field to the selected driver
    return this.http.put(`${this.apiUrl}/${deliveryId}`, { driverId });
  }
}
