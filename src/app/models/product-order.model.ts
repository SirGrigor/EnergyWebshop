import {Product} from './product.model';

export class ProductOrder {
  product: Product;
  productQuantity: number;


  constructor(product: Product, productQuantity: number) {
    this.product = product;
    this.productQuantity = productQuantity;
  }
}
