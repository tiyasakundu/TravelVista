import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contactus',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contactus.component.html',
  styleUrl: './contactus.component.css'
})
export class ContactusComponent {
  contact = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };
  submitted = false;

  onSubmit(form: any) {
    if (form.valid) {
      // Normally, you would send the data to a backend service here
      console.log('Form Data:', this.contact);

      // Display success message
      this.submitted = true;

      setTimeout(() => {
        this.submitted = false;
      }, 3000);

      // Reset the form after submission
      form.resetForm();
    }
  }
}
