import { Component } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent {
  currenProduct: any;
  ngOnInit() {
    const state = history.state;
    this.currenProduct = state;
  }
}
