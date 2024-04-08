import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCommonModule } from '@angular/material/core';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule,MatCommonModule,MatExpansionModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class FaqComponent {
  faqList = [
    { question: 'How do I sign up as a driver?', answer: 'To sign up as a driver, go to our website and fill out the driver registration form.' },
    { question: 'What are the requirements to become a driver?', answer: 'You must have a valid driver\'s license, a vehicle, and pass a background check.' },
    { question: 'How do I view my earnings?', answer: 'You can view your earnings in the driver wallet.' },
    // Add more FAQ items as needed
  ];

}
