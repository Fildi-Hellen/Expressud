import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from 'src/app/contact.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{
  
  contactForm!: FormGroup; // Declare contactForm
  messageReceived: boolean = false; // Declare messageReceived
  constructor(private formBuilder: FormBuilder,private contactService: ContactService) {}

ngOnInit() {
  this.contactForm = this.formBuilder.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    subject: ['', Validators.required],
    message: ['', Validators.required],
  });
}
  submitForm() {
    if (this.contactForm.valid) {
      // If form is valid, proceed with submission
      this.contactService.sendFormData(this.contactForm.value).subscribe(
        (response: any) => {
          console.log('Form data sent successfully:', response);
          this.messageReceived = true; // Show confirmation message
          this.contactForm.reset(); // Optionally reset form after submission
        },
        (error: any) => {
          console.error('Error sending form data:', error);
          // Handle error response from the API
        }
      );
    } else {
      // Show validation errors
      Object.keys(this.contactForm.controls).forEach(field => {
        const control = this.contactForm.get(field);
        if (control) {
          control.markAsTouched({ onlySelf: true });
        }
  
      });
    }
  }
  
  }
   
  
  

