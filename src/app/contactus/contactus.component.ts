import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-contactus',
  standalone: true,
  imports: [
    FormsModule, 
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule
  ],
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
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
      console.log('Form Data:', this.contact);

      this.submitted = true;
      setTimeout(() => {
        this.submitted = false;
      }, 3000);

      form.resetForm();
    }
  }
}
