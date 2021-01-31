import { Component, OnInit } from '@angular/core';
import {EcommerceService} from '../services/EcommerceService';
import {Product} from '../models/product.model';
import {ProductOrders} from '../models/product-orders.model';
import {ProductOrder} from '../models/product-order.model';
import {Subscription} from 'rxjs/Subscription';
import {ProductDonated} from '../models/product-donated.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Product[] = [];
  productOrders: ProductOrder[] = [];
  donatedItems: ProductDonated[] = [];
  selectedProductOrder: ProductOrder;
  sub: Subscription;
  productSelected = false;

  private shoppingCartOrders: ProductOrders;

  constructor(private ecommerceService: EcommerceService) {
  }

  ngOnInit() {
    this.donatedItems = [];
    this.productOrders = [];
    this.loadProducts();
    this.loadOrders();
    this.ecommerceService.getDonatedItemsList();
  }

  loadProducts() {
    this.ecommerceService.getAllProducts()
      .subscribe(
        (products: any[]) => {
          this.products = products;
          this.products.forEach(product => {
            if (product.productCategory === 'DONATED') {
              this.donatedItems.push(new ProductDonated(product, 0));
              this.productOrders.push(new ProductOrder(product, 0));
            } else {
              this.productOrders.push(new ProductOrder(product, 0));
            }
          });
          this.ecommerceService.setDonatedItemsList(this.donatedItems);
        },
        (error) => console.log(error)
      );
  }

  loadOrders() {
  this.sub = this.ecommerceService.OrdersChanged.subscribe(() => {
    this.shoppingCartOrders = this.ecommerceService.ProductOrders;
  });
  }

  isProductSelected(product: Product): boolean {
    return this.getProductIndex(product) > -1;
  }

   getProductIndex(product: Product): number {
    return this.ecommerceService.ProductOrders.productOrders
      .findIndex(value => value.product === product);
  }

  addToCart(order: ProductOrder) {

    this.ecommerceService.SelectedProductOrder = order;
    this.selectedProductOrder = this.ecommerceService.SelectedProductOrder;
    this.productSelected = true;
  }

  removeFromCart(productOrder: ProductOrder) {
    const index = this.getProductIndex(productOrder.product);
    if (index > -1) {
    this.shoppingCartOrders.productOrders.splice(
      this.getProductIndex(productOrder.product), 1);
    }
    this.ecommerceService.ProductOrders = this.shoppingCartOrders;
    this.shoppingCartOrders = this.ecommerceService.ProductOrders;
    this.productSelected = false;
  }

  reset() {
    this.productOrders = [];
    this.loadProducts();
    this.ecommerceService.ProductOrders.productOrders = [];
    this.loadOrders();
    this.productSelected = false;
  }

  addDonatedProducts(donatedItems: ProductDonated[]) {
    this.donatedItems = donatedItems;
  }
}
