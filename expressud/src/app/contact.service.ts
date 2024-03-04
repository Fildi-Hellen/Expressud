import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts'; // Fake API endpoint (JSONPlaceholder as an example)
  constructor(private http: HttpClient) { }
  sendFormData(formData: any): Observable<any> {
    // Simulate POST request to the fake API
    return this.http.post<any>(this.apiUrl, formData);
  }
}
