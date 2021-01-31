import { Component, OnInit } from '@angular/core';
import {ProductOrders} from '../models/product-orders.model';
import {Subscription} from 'rxjs/Subscription';
import {EcommerceService} from '../services/EcommerceService';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders: ProductOrders;
  total: number;
  paid: boolean;
  sub: Subscription;
  insert: number;
  inserted: boolean;
  cashback: number;
  sum: number;

  constructor(public ecommerceService: EcommerceService) {
    this.orders = this.ecommerceService.ProductOrders;
  }

  ngOnInit() {
    this.paid = false;
    this.sub = this.ecommerceService.OrdersChanged.subscribe(() => {this.orders = this.ecommerceService.ProductOrders; });
    this.loadTotal();
    this.insert = 0;
    this.inserted = false;
  }

  pay() {
    this.paid = true;
    this.ecommerceService.saveOrder(this.orders).subscribe();
  }

  loadTotal() {
    this.sub = this.ecommerceService.TotalChanged.subscribe(() => {
      this.total = this.ecommerceService.Total;
    });
  }

  onSubmit(cashInsertForm: NgForm) {
    const inserted = cashInsertForm.value.insert;
    if (inserted >= this.total) {
      this.cashback = this.sum - this.insert;
      this.insert = cashInsertForm.value.insert;
      this.inserted = true;
    } else {
      alert('not enough funds!');
    }
  }
}
