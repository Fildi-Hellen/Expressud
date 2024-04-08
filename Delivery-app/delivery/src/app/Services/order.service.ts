
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Order} from '../Models/order';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class OrderService {
  getOrders(): Observable<Order[]> {
    throw new Error('Method not implemented.');
  }

  private apiUrl = 'https://your-backend-api-url.com/orders'; // Replace with your actual backend API URL

  constructor(private http: HttpClient) { }

  getOrderRequests(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/requests`);
  }
  getOrderHistory(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/history`);
  }
  acceptOrder(orderId: string): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${orderId}/accept`, {});
  }

  rejectOrder(orderId: string): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${orderId}/reject`, {});
  }
}
