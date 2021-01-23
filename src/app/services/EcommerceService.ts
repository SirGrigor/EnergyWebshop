import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class EcommerceService {
  private productsUrl = 'http://localhost:8080/api/products';

  constructor(private http: HttpClient) {
  }

  getAllProducts() {
    console.log(this.http.get(this.productsUrl));
    return this.http.get(this.productsUrl);
  }
}
