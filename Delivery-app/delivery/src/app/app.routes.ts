import { Routes } from '@angular/router';
import { AuthenticationComponent } from './Components/authentication/authentication.component';
import { CustomSidebarComponent } from './Components/custom-sidebar/custom-sidebar.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { FooterComponent } from './Components/footer/footer.component';
import { MapComponent } from './Components/map/map.component';
import { NotificationsComponent } from './Components/notifications/notifications.component';
import { OrderHistoryComponent } from './Components/order-history/order-history.component';
import { OrderRequestComponent } from './Components/order-request/order-request.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { SettingsComponent } from './Components/settings/settings.component';
import { SideBarComponent } from './Components/side-bar/side-bar.component';
import { WalletComponent } from './Components/wallet/wallet.component';
import { FaqComponent } from './Components/faq/faq.component';

export const routes: Routes = [
  { path: 'authentication', component: AuthenticationComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'side-bar', component: SideBarComponent },
  { path: 'map', component: MapComponent },
  { path: 'notifications', component: NotificationsComponent },
  {path:'order-history',component:OrderHistoryComponent},
  {path:'order-request',component:OrderRequestComponent},
  { path: 'profile', component: ProfileComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'wallet', component: WalletComponent },
  { path: 'footer', component: FooterComponent },
  {path:'faq',component:FaqComponent},
  { path: 'custom-sidebar', component: CustomSidebarComponent },
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' }, // Default route should come last
];
