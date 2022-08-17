import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Product} from '../data/product';
import {filter} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseURL = "https://coffeerest-skeleton.herokuapp.com/product/v1/get";

  private token = localStorage.getItem("token");
  constructor(private httpClient: HttpClient) {
  }

  getProducts(): Observable<Product[]> {
  const baseURL = "https://coffeerest-skeleton.herokuapp.com/product/v1/get/products";

    return this.httpClient.get<Product[]>(baseURL, {
      headers: new HttpHeaders(
        {
          'Authorization': `Bearer ${this.token}`
        }
      )});
  }

  viewProduct(productId: number): Observable<Product> {
    const baseURL = "https://coffeerest-skeleton.herokuapp.com/product/v1/" + productId;
    return this.httpClient.get<Product>(baseURL, {
      headers: new HttpHeaders(
        {
          'Authorization': `Bearer ${this.token}`
        }
      )
    })
  }

}
