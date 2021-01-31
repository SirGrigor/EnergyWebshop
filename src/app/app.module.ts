import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { ProductComponent } from './product/product.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {EcommerceService} from './services/EcommerceService';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { OrdersComponent } from './orders/orders.component';
import { DonatedItemsComponent } from './donated-items/donated-items.component';
import {RouterModule, Routes} from '@angular/router';
import {routing} from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    EcommerceComponent,
    ProductComponent,
    ShoppingCartComponent,
    OrdersComponent,
    DonatedItemsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    routing
  ],
  exports: [RouterModule],
  providers: [EcommerceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
