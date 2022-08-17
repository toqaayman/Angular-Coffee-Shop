import {Component, OnInit} from '@angular/core';
import {Product, products} from 'src/app/data/product';
import {CartService} from 'src/app/service/cart.service';
import {ProductService} from 'src/app/service/product.service';

import {DataHandlerService} from 'src/app/service/data-handler.service';
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private ProductService: ProductService
  ) {
  }

  ngOnInit() {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));
    this.ProductService.viewProduct(productIdFromRoute).subscribe(res => {
        console.log(res)
        this.product = res;
      },
      err => console.log(err)
    )
    // Find the product that correspond with the id provided in route.
    //this.product = products.find(product => product.id === productIdFromRoute);
  }

  addItemToCart(product: any) {
    this.cartService.addtoCart(product);
  }

}
