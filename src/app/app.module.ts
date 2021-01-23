import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { ProductComponent } from './product/product.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {EcommerceService} from './services/EcommerceService';


@NgModule({
  declarations: [
    AppComponent,
    EcommerceComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [EcommerceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
