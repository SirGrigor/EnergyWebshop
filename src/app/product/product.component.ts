import { Component, OnInit } from '@angular/core';
import {EcommerceService} from '../services/EcommerceService';
import {Product} from '../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Product[] = [];

  constructor(private ecommerceService: EcommerceService) {}

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.ecommerceService.getAllProducts()
      .subscribe(
        (products: any[]) => {
          this.products = products;
          console.log(products);
        }
      );
  }

}
