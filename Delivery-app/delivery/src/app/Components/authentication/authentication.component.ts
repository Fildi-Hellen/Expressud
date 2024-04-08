import { Component } from '@angular/core';
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'app-authentication',
  standalone: true,
  imports: [],
  templateUrl: './authentication.component.html',
  styleUrl: './authentication.component.css'
})
export class AuthenticationComponent {
//   fullName: string = '';
//   email: string = '';
//   password: string = '';

//   constructor(private authService: AuthService) { }

//   register(): void {
//     const userData = {
//       fullName: this.fullName,
//       email: this.email,
//       password: this.password
//     };

//     this.authService.register(userData)
//       .subscribe(
//         () => {
//                      Redirect to login page after successful registration
//                     this.router.navigate(['/login']);

//         },
//         error => {
//            Handle registration error
//         }
//       );
//   }

//   login(): void {
//     this.authService.loginWithEmail(this.email, this.password)
//       .subscribe(
//         () => {
//           // Redirect or show success message
//         },
//         error => {
//           // Handle login error
//         }
//       );
//   }

//   loginWithSocialMedia(provider: string): void {
//     this.authService.loginWithSocialMedia(provider)
//       .subscribe(
//         () => {
//           // Redirect or show success message
//         },
//         error => {
//           // Handle login error
//         }
//       );
//   }

//   logout(): void {
//     this.authService.logout();
//   }

}
