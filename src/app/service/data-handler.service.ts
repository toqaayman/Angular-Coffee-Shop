import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product, products } from '../data/product';
import { TestData } from '../data/test-data';

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {

  productsSubject = new BehaviorSubject<Product[]>(TestData.products)

  constructor() {}

  fillProducts() {
    this.productsSubject.next(TestData.products);
  }
}
