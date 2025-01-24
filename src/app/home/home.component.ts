import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone:true,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  message = 'Welcome to the Task Management App!';
}
