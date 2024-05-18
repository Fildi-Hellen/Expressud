import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../Shared1/models/Order';
import { environment } from 'src/environments/environment'; // Import environment for API URL

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private API_URL = environment.apiUrl;

  constructor(private http: HttpClient) { }

  create(order: Order): Observable<Order> {
    return this.http.post<Order>(`${this.API_URL}/orders/create`, order);
  }
  

  getNewOrderForCurrentUser(): Observable<Order> {
    return this.http.get<Order>(`${this.API_URL}/orders/newForCurrentUser`);
  }

  
  pay(order: Order): Observable<string> {
    return this.http.post<string>(`${this.API_URL}/orders/pay`, order);
  }

  trackOrderById(id: number): Observable<Order> {
    return this.http.get<Order>(`${this.API_URL}/orders/track/${id}`);
  }
  getOrderDetails(orderId: number): Observable<Order> {
    return this.http.get<Order>(`${this.API_URL}}/${orderId}`);
  }
}

