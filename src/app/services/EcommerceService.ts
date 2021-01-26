import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ProductOrder} from '../models/product-order.model';
import {ProductOrders} from '../models/product-orders.model';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class EcommerceService {
  private productsUrl = 'http://localhost:8080/api/products';
  private orderUrl = 'http://localhost:8080/api/products';

  private orders: ProductOrders = new ProductOrders();
  private productOrder: ProductOrder;

  private productOrderSubject = new Subject();
  private ordersSubject = new Subject();
  private totalSubject = new Subject();
  private cashSubject = new Subject();

  private total: number;
  private cash: number;

  ProductOrderChanged = this.productOrderSubject.asObservable();
  OrdersChanged = this.ordersSubject.asObservable();
  TotalChanged = this.totalSubject.asObservable();
  CashChanged = this.cashSubject.asObservable();

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

  get Cash() {
    return this.cash;
  }

  set Cash(value: number) {
    this.cash = value;
    this.cashSubject.next();
  }

}