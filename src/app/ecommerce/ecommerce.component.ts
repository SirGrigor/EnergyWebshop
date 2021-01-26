import {Component, OnInit, ViewChild} from '@angular/core';
import {ProductComponent} from '../product/product.component';
import {ShoppingCartComponent} from '../shopping-cart/shopping-cart.component';
import {OrdersComponent} from '../orders/orders.component';

@Component({
  selector: 'app-ecommerce',
  templateUrl: './ecommerce.component.html',
  styleUrls: ['./ecommerce.component.css']
})
export class EcommerceComponent implements OnInit {

  orderFinished = false;
  collapsed = true;

  @ViewChild('productsChild')
  productsChild: ProductComponent;

  @ViewChild('shoppingCartChild')
  shoppingCartChild: ShoppingCartComponent;

  @ViewChild('orderChild')
  ordersChild: OrdersComponent;

  constructor() { }

  ngOnInit() {
  }

  finishOrder(orderFinished: boolean) {
    this.orderFinished = orderFinished;
  }

  reset() {
    this.orderFinished = false;
    this.productsChild.reset();
    this.shoppingCartChild.reset();
    this.ordersChild.paid = false;
  }
}
