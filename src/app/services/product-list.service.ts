import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable()
export class ProductListService {

  constructor() { }

  public getProducts(page: Number): Promise<Array<Product>> {
    return new Promise((resolve, reject) => resolve([
      {
        title: 'Food 1',
        image: 'image src',
        description: 'Description 1',
        price: 123
      }, {
        title: 'Food 2',
        image: 'image src',
        description: 'Description 2',
        price: 123
      }
    ]));
  }

}
