import { CommonModule } from '@angular/common';
import { Component, Input,  computed,  signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';

export type MenuItem={
  icon:string;
  label:string;
   route?:string;

}
@Component({
  selector: 'app-custom-sidebar',
  standalone: true,
  imports: [MatListModule,MatIconModule,CommonModule,RouterModule],
  templateUrl: './custom-sidebar.component.html',
  styleUrl: './custom-sidebar.component.css'

})
export class CustomSidebarComponent {
  sideNavCollapsed=signal(false)
  @Input() set collasped(val:boolean){
    this.sideNavCollapsed.set(val);
  }
  Profilepic=computed(()=>this.sideNavCollapsed()? '32':'100');
 menuItems=signal<MenuItem[]>([
  {
    icon:'dashboard',
    label:'Dashboard',
    route:'dashboard'
  },
  {
    icon:'history',
    label:'Orders',
    route:'order-history'
  },
  {
    icon:'request_page',
    label:'Request',
    route:'order-request'
  },
  {
    icon:'notifications',
    label:'Notification',
    route:'notifications'
  },
  {
    icon:'account_circle',
    label:'Profile',
    route:'profile'
  },
  {
    icon:'wallet',
    label:'Wallet',
    route:'wallet'
  },
  {
    icon:'settings',
    label:'Settings',
    route:'settings'
  }
  
 ])
}
