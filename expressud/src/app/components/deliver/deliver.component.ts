import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-deliver',
  templateUrl: './deliver.component.html',
  styleUrl: './deliver.component.css'
})
export class DeliverComponent {
  userForm: FormGroup;

  // Define an array of cities
  cities = ['Juba', 'Yei', 'Wau','Bor'];

  constructor(private formBuilder: FormBuilder) {
    this.userForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]+$')]], // Assuming only digits are allowed
      city: ['', Validators.required],
      transportation: ['', Validators.required]
    });
  }

  // Function to handle form submission
  onSubmit() {
    if (this.userForm.valid) {
      // You can perform any necessary actions here, like submitting the form data to a backend server
      console.log('Form submitted successfully');
      // Redirect the user to the courier panel (replace 'courier-panel' with the actual route)
      // this.router.navigate(['/courier-panel']);
    } else {
      console.error('Form submission failed. Please check the form fields.');
    }
  }

}
