import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { DataService } from './service/data.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  name = '';
  price = 0;
  description = '';
  productType = '';

  constructor(private dataService: DataService) {}

  // getter will get the latest data even if changes it will call again and get the latest data.
  get getProducts(): any[] {
    return this.dataService.data;
  }

  addProduct() {
    const newObj = {
      name: this.name,
      price: this.price,
      description: this.description,
      productType: this.productType
    };

    this.dataService.addData(newObj);

    // console.log()
  }
}
