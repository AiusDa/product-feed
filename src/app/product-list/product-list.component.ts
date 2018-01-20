import { Component, OnInit } from '@angular/core';

import { Product } from '../models/product.model';
import { ProductListService } from '../services/product-list.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  private currentPage: number = 1;
  public products: Array<Product>;

  public scrollCallback: Function;

  constructor(private productListService: ProductListService) {
    this.products = [];
    // this.scrollCallback = this.getProducts.bind(this);
  }

  ngOnInit() {
    this.getProducts();
  }

  private getProducts() {
    return this.productListService.getProducts(this.currentPage)
      .then((data: Array<Product>) => {
        this.currentPage++;
        this.products = this.products.concat(data);
      });
  }

}
