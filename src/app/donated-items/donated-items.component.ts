import {Component, OnInit} from '@angular/core';
import {EcommerceService} from '../services/EcommerceService';
import {ProductDonated} from '../models/product-donated.model';

@Component({
  selector: 'app-donated-items',
  templateUrl: './donated-items.component.html',
  styleUrls: ['./donated-items.component.css']
})
export class DonatedItemsComponent implements OnInit {

  donatedProduct: ProductDonated[] = [];

  constructor(private ecommerceService: EcommerceService) {
  }

  ngOnInit() {
    this.donatedProduct = this.ecommerceService.getDonatedItemsList();
 }


}
