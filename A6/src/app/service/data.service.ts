import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  data: any[] = [];
  constructor() {}

  addData(newData: any) {
    this.data.push(newData);
    console.log(this.data);
  }
}
