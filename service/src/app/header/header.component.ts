import { Component } from '@angular/core';
import { UsersDataService } from '../service/users-data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  
  storeUserData:any;
  constructor(private userData:UsersDataService){
    console.warn("UserData",userData.employeeData());
    this.storeUserData = this.userData.employeeData();
  }
}
