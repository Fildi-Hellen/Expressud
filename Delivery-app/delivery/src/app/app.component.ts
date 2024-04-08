import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SideBarComponent } from './Components/side-bar/side-bar.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './Components/footer/footer.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { OrderHistoryComponent } from './Components/order-history/order-history.component';
import { OrderRequestComponent } from './Components/order-request/order-request.component';
import { WalletComponent } from './Components/wallet/wallet.component';
import { SettingsComponent } from './Components/settings/settings.component';
import { NotificationsComponent } from './Components/notifications/notifications.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { MapComponent } from './Components/map/map.component';
import { AuthenticationComponent } from './Components/authentication/authentication.component';
import { MatToolbarModule } from '@angular/material/toolbar';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SideBarComponent,CommonModule,
    RouterModule,
   OrderRequestComponent,
    WalletComponent,
    SettingsComponent,
    NotificationsComponent,
    DashboardComponent,
    MapComponent,
    AuthenticationComponent,
    FooterComponent,
    ProfileComponent,
    OrderHistoryComponent,MatToolbarModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'delivery';
}
