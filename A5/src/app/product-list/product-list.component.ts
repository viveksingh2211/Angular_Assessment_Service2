import { Component } from '@angular/core';
import { ServiceDataService } from '../newService/service-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  products: any;
  constructor(
    private serviceData: ServiceDataService,
    private router: Router
  ) {}

  ngOnInit() {
    this.products = this.serviceData.products;
  }

  onSubmit(id: string) {
    const prod = this.serviceData.getOneProductDetail(id);

    console.log(prod);
    this.router.navigateByUrl('/product-detail', { state: prod });
  }
}
