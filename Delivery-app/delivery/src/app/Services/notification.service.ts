import { Injectable } from '@angular/core';
import { Notification } from '../Models/notification';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

 private notifications: Notification[] = [];
  private notificationsSubject: BehaviorSubject<Notification[]> = new BehaviorSubject<Notification[]>([]);

  constructor() { }

  getNotifications(): Observable<Notification[]> {
    return this.notificationsSubject.asObservable();
  }

  addNotification(notification: Notification): void {
    this.notifications.push(notification);
    this.notificationsSubject.next(this.notifications);
  }

  clearNotifications(): void {
    this.notifications = [];
    this.notificationsSubject.next(this.notifications);
  }
}
