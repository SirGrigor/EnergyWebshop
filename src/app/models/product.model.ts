export class Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
  isActive: boolean;
  category: string;
  pictureUrl: string;

  constructor(id: number, name: string, price: number, quantity: number, isActive: boolean, category: string, pictureUrl: string) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.isActive = isActive;
    this.category = category;
    this.pictureUrl = pictureUrl;
  }
}
