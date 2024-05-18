import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FeedbackService } from 'src/app/Services/feedback.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.css'
})
export class FeedbackComponent {

  feedbackForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private feedbackService: FeedbackService) {
    this.feedbackForm = this.formBuilder.group({
      comment: ['', Validators.required],
      rating: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.feedbackForm.valid) {
      this.feedbackService.submitFeedback(this.feedbackForm.value).subscribe(
        () => {
          // Feedback submitted successfully
          // Add logic to show success message or notification
          console.log('Feedback submitted successfully');
        },
        (error) => {
          // Handle error
          console.error('Error submitting feedback:', error);
        }
      );
    }
  }
}
