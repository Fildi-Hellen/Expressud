import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-popform',
  templateUrl: './popform.component.html',
  styleUrl: './popform.component.css'
})
export class PopformComponent implements OnInit {

  form!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      establishmentName: ['', Validators.required],
      establishmentType: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      numberOfStores: ['', Validators.required],
      location: ['', Validators.required],
      promocode: [false],
      acceptUpdates: [false, Validators.requiredTrue],
      acceptPrivacyPolicy: [false, Validators.requiredTrue]
    });
  }

  submitForm() {
    if (this.form.valid) {
      // Submit form data
    } else {
      // Handle form validation errors
    }
  }

  
  

}
