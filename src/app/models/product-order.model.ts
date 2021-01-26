import {Product} from './product.model';

export class ProductOrder {
  product: Product;
  orderedProductQuantity: number;


  constructor(product: Product, orderedProductQuantity: number) {
    this.product = product;
    this.orderedProductQuantity = orderedProductQuantity;
  }
}
