import { Component } from '@angular/core';
import { UsersDataService } from '../service/users-data.service';
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  storeUserData:any;
  constructor(private userData:UsersDataService){
    console.warn("userData",userData.employeeData());
    this.storeUserData = this.userData.employeeData();
  }
}
