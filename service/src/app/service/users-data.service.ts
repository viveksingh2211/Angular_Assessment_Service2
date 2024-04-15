import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsersDataService {
  constructor() {}
  employeeData() {
    return [
      {
        Name: 'vivek',
        Email: 'vivek@gmail.com',
        Gender: 'Male',
      },
      {
        Name: 'Rahul',
        Email: 'rahul@gmail.com',
        Gender: 'Male',
      },
      {
        Name: 'Anusha',
        Email: 'anusha@gmail.com',
        Gender: 'Female',
      },
      {
        Name: 'Rabin',
        Email: 'rabin@gmail.com',
        Gender: 'Male',
      },
    ];
  }
}
