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

  @ViewChild('productsChild')
  productsChild: ProductComponent;

  @ViewChild('shoppingCartChild')
  shoppingCartChild: ShoppingCartComponent;

  @ViewChild('orderChild')
  ordersChild: OrdersComponent;

  constructor() { }

  ngOnInit() {
  }
}
