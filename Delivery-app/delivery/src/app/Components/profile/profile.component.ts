import { Component } from '@angular/core';
import { AuthService } from '../../Services/auth.service';
import { User } from '../../Models/user.model';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  // user: User; // Assuming User model is imported

  // profileForm: FormGroup;

  // constructor(private authService: AuthService, private formBuilder: FormBuilder) { }

  // ngOnInit(): void {
  //   // Initialize profile form with current user's data
  //   this.authService.getCurrentUser().subscribe((user: User) => {
  //     this.user = user;
  //     this.initializeForm();
  //   });
  // }

  // initializeForm(): void {
  //   this.profileForm = this.formBuilder.group({
  //     username: [this.user.username, Validators.required],
  //     email: [this.user.email, [Validators.required, Validators.email]],
  //     // Add more fields as needed
  //   });
  // }

  // onSubmit(): void {
  //   if (this.profileForm.invalid) {
  //     return;
  //   }
    
  //   const updatedUserData = this.profileForm.value;

  //   // Call AuthService to update user's profile
  //   this.authService.updateUserProfile(updatedUserData).subscribe(
  //     () => {
  //       // Handle success, e.g., show success message
  //       console.log('Profile updated successfully');
  //     },
  //     (error) => {
  //       // Handle error, e.g., show error message
  //       console.error('Failed to update profile:', error);
  //     }
  //   );
  // }

  // // Method to handle password change
  // changePassword(newPassword: string): void {
  //   // Call AuthService to change password
  //   this.authService.changePassword(newPassword).subscribe(
  //     () => {
  //       // Handle success, e.g., show success message
  //       console.log('Password changed successfully');
  //     },
  //     (error) => {
  //       // Handle error, e.g., show error message
  //       console.error('Failed to change password:', error);
  //     }
  //   );
  // }

}
