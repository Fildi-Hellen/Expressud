import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  credentials = { email: '', password: '' };

  constructor(private authService: AuthService, private router: Router) { }

  login() {
    this.authService.login(this.credentials).subscribe(
      (res: any) => {
        this.authService.setUser(res.user);
        this.redirectToPanel(res.user.role);
      },
      err => console.error(err)
    );
  }

  redirectToPanel(role: string) {
    if (role === 'admin') {
      this.router.navigate(['/admin']);
    } else if (role === 'vendor') {
      this.router.navigate(['/dashboard']);
    } 
    else if (role === 'driver') {
      this.router.navigate(['/hero-driver']);
    } 
    else {
      this.router.navigate(['/home']);
    }
  }

}
