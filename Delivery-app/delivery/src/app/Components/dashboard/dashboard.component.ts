import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AuthenticationComponent } from '../authentication/authentication.component';
import { FaqComponent } from '../faq/faq.component';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterModule,RouterOutlet,AuthenticationComponent,FaqComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {


}
