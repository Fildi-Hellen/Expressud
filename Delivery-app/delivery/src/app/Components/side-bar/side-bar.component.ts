import { Component, computed, signal } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import{ MatIconModule } from '@angular/material/icon';
import{  MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav'
import { RouterModule } from '@angular/router';
import { ProfileComponent } from "../profile/profile.component";
import { DashboardComponent } from "../dashboard/dashboard.component";
import { CustomSidebarComponent } from "../custom-sidebar/custom-sidebar.component";

@Component({
    selector: 'app-side-bar',
    standalone: true,
    templateUrl: './side-bar.component.html',
    styleUrl: './side-bar.component.css',
    imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatSidenavModule, RouterModule, ProfileComponent, DashboardComponent, CustomSidebarComponent]
})
export class SideBarComponent {
    collasped = signal(false)
    sidenavwidth=computed(()=>this.collasped()? '65px':'250px')

}
