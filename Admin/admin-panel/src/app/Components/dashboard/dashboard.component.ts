import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { DocumentsComponent } from '../documents/documents.component';
import { FaqComponent } from '../faq/faq.component';
import { AnalyticsComponent } from '../analytics/analytics.component';
import { NotificationsComponent } from '../notifications/notifications.component';
import { SecurityComponent } from '../security/security.component';
import { SettingsComponent } from '../settings/settings.component';
import { SupportComponent } from '../support/support.component';
import { UserManagementComponent } from '../user-management/user-management.component';
import { OrderManagementComponent } from '../order-management/order-management.component';
import { ProductManagementComponent } from '../product-management/product-management.component';
import { HeaderComponent } from '../../Common/header/header.component';
import { SidebarComponent } from '../../Common/sidebar/sidebar.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterOutlet,RouterLink,
    DocumentsComponent,FaqComponent,AnalyticsComponent,NotificationsComponent,
    SecurityComponent,SettingsComponent,SupportComponent,UserManagementComponent,OrderManagementComponent,
    ProductManagementComponent,HeaderComponent,SidebarComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
