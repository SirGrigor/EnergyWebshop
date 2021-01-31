import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ProductOrder} from '../models/product-order.model';
import {ProductOrders} from '../models/product-orders.model';
import {Subject} from 'rxjs/Subject';
import {ProductDonated} from '../models/product-donated.model';

@Injectable()
export class EcommerceService {
  private productsUrl = 'http://localhost:8080/api/products';
  private orderUrl = 'http://localhost:8080/api/products';

  private orders: ProductOrders = new ProductOrders();
  private productOrder: ProductOrder;

  private productOrderSubject = new Subject();
  private ordersSubject = new Subject();
  private totalSubject = new Subject();

  private productDonated: ProductDonated[];

  private total: number;

  ProductOrderChanged = this.productOrderSubject.asObservable();
  OrdersChanged = this.ordersSubject.asObservable();
  TotalChanged = this.totalSubject.asObservable();

  constructor(private http: HttpClient) {
  }

  getAllProducts() {
    return this.http.get(this.productsUrl);
  }

  saveOrder(order: ProductOrders) {
    return this.http.post(this.orderUrl, order);
  }

  set SelectedProductOrder(value: ProductOrder) {
    this.productOrder = value;
    this.productOrderSubject.next();
  }

  get SelectedProductOrder() {
    return this.productOrder;
  }

  set ProductOrders(value: ProductOrders) {
    this.orders = value;
    this.ordersSubject.next();
  }

  get ProductOrders() {
    return this.orders;
  }

  get Total() {
    return this.total;
  }

  set Total(value: number) {
    this.total = value;
    this.totalSubject.next();
  }

  setDonatedItemsList(productList: ProductDonated[]) {
    this.productDonated = productList;
  }

  getDonatedItemsList() {
    return this.productDonated;
  }

  setDonatedItemAmount(product: ProductDonated) {
   const index = this.productDonated.findIndex(productDonated =>
      productDonated.product.productId === product.product.productId);
    this.productDonated[index] = product;
  }
}
