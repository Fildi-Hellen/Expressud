import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registrationData = {
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  constructor(private authService: AuthService, private router: Router) { }

  register() {
    if (this.registrationData.password !== this.registrationData.confirmPassword) {
      // Passwords don't match, handle error (e.g., show error message)
      return;
    }

    this.authService.register(this.registrationData).subscribe(
      (res: any) => {
        // Registration successful, redirect to login page
        this.router.navigate(['/login']);
      },
      (err: any) => console.error(err)
    );
  }

}
