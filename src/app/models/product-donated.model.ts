import {Product} from './product.model';

export class ProductDonated {
  product: Product;
  donatedProductAmount: number;


  constructor(product: Product, donatedProductAmount: number) {
    this.product = product;
    this.donatedProductAmount = donatedProductAmount;
  }

  incrementDonatedProducts() {
    this.donatedProductAmount = this.donatedProductAmount + 1;
  }
}
