import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NotificationService } from '../../Services/notification.service';
import {Notification} from '../../Models/notification'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.css'
})
export class NotificationsComponent  implements OnInit{
  notifications$!: Observable<Notification[]>;

  constructor(private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.notifications$ = this.notificationService.getNotifications();
  }

  clearNotifications(): void {
    this.notificationService.clearNotifications();
  }

}
