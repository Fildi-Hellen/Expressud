import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './Common/sidebar/sidebar.component';
import { FooterComponent } from './Common/footer/footer.component';
import { CommonModule } from '@angular/common';
import { DocumentsComponent } from './Components/documents/documents.component';
import { NotificationsComponent } from './Components/notifications/notifications.component';
import { OrderManagementComponent } from './Components/order-management/order-management.component';
import { ProductManagementComponent } from './Components/product-management/product-management.component';
import { SettingsComponent } from './Components/settings/settings.component';
import { SupportComponent } from './Components/support/support.component';
import { SecurityComponent } from './Components/security/security.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AnalyticsComponent } from './Components/analytics/analytics.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,SidebarComponent,FooterComponent,CommonModule,
  DocumentsComponent,NotificationsComponent,OrderManagementComponent,
  ProductManagementComponent,SettingsComponent,SupportComponent,SecurityComponent,
  MatToolbarModule,AnalyticsComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'admin-panel';
}
