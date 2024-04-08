import { Component,  computed, signal } from '@angular/core';
import { RouterModule, } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import{ MatIconModule } from '@angular/material/icon';
import{  MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav'
import { CommonModule } from '@angular/common';
import { CustomsideComponent } from "../customside/customside.component";
import { DashboardComponent } from '../../Components/dashboard/dashboard.component';

export type MenuItem={
  icon:string;
  label:string;
   route?:string;
  }

@Component({
    selector: 'app-sidebar',
    standalone: true,
    templateUrl: './sidebar.component.html',
    styleUrl: './sidebar.component.css',
    imports: [RouterModule, MatToolbarModule, MatIconModule, CommonModule, MatButtonModule, MatSidenavModule, CustomsideComponent,DashboardComponent]
})
export class SidebarComponent {
  collasped = signal(false)
    sidenavwidth=computed(()=>this.collasped()? '65px':'250px')
}