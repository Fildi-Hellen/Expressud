import { CommonModule } from '@angular/common';
import { Component, Input, computed, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule, } from '@angular/router';

export type MenuItem={
  icon:string;
  label:string;
   route?:string;}

@Component({
  selector: 'app-customside',
  standalone: true,
  imports: [MatIconModule,MatListModule,RouterModule,CommonModule],
  templateUrl: './customside.component.html',
  styleUrl: './customside.component.css'
})
export class CustomsideComponent {
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
    icon:'receipt',
    label:'Order management',
    route:'order-management'
  },
  {
    icon:'inventory_2',
    label:'Product Mangement',
    route:'product-management'
  },
  {
    icon:'analytics',
    label:'Analytics',
    route:'analytics'
  },
  {
    icon:'help_outline',
    label:'Help',
    route:'documents'
  },
  {
    icon:'support',
    label:'support',
    route:'support'
  },
  {
    icon:'settings',
    label:'Settings',
    route:'settings'
  }
  
 ])

}
