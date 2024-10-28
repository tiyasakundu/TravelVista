import { Component } from '@angular/core';
import { UserComponent } from '../user/user.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-account',
  standalone: true,
  imports: [UserComponent, RouterModule, CommonModule],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent {

}
