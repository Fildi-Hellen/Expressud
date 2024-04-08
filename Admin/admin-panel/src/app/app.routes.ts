import { Routes } from '@angular/router';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { AnalyticsComponent } from './Components/analytics/analytics.component';
import { DocumentsComponent } from './Components/documents/documents.component';
import { FaqComponent } from './Components/faq/faq.component';
import { NotificationsComponent } from './Components/notifications/notifications.component';
import { OrderManagementComponent } from './Components/order-management/order-management.component';
import { ProductManagementComponent } from './Components/product-management/product-management.component';
import { SecurityComponent } from './Components/security/security.component';
import { SettingsComponent } from './Components/settings/settings.component';
import { SupportComponent } from './Components/support/support.component';
import { UserManagementComponent } from './Components/user-management/user-management.component';
import { CustomsideComponent } from './Common/customside/customside.component';
import { FooterComponent } from './Common/footer/footer.component';
import { HeaderComponent } from './Common/header/header.component';
import { SidebarComponent } from './Common/sidebar/sidebar.component';
import { MainComponent } from './Common/main/main.component';

export const routes: Routes = [
    // {path:  '', title: 'Dashboard ',component:DashboardComponent},
     {path:'dashboard',component:DashboardComponent},
    {path:'analytics',component:AnalyticsComponent},
    {path:'documents',component:DocumentsComponent},
    {path:'faq',component:FaqComponent},
    {path:'notifications',component:NotificationsComponent},
    {path:'order-management',component:OrderManagementComponent},
    {path:'product-management',component:ProductManagementComponent},
    {path:'security',component:SecurityComponent},
    {path:'settings',component:SettingsComponent},
    {path:'support',component:SupportComponent},
    {path:'user-management',component:UserManagementComponent},
    {path:'customside',component:CustomsideComponent},
    {path:'footer',component:FooterComponent},
    {path:'header',component:HeaderComponent},
    {path:'sidebar',component:SidebarComponent},
    {path:'main',component:MainComponent},
     { path: '', pathMatch: 'full', redirectTo: 'dashboard' }
];
