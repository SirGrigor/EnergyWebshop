export class Product {
  productId: number;
  productName: string;
  productPrice: number;
  productQuantity: number;
  active: boolean;
  productCategory: string;
  productPictureUrl: string;


  constructor(productId: number, productName: string, productPrice: number, productQuantity: number,
              active: boolean, productCategory: string, productPictureUrl: string) {
    this.productId = productId;
    this.productName = productName;
    this.productPrice = productPrice;
    this.productQuantity = productQuantity;
    this.active = active;
    this.productCategory = productCategory;
    this.productPictureUrl = productPictureUrl;
  }
}
