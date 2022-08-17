import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/data/product';
import { CartService } from 'src/app/service/cart.service';
import { DataHandlerService } from 'src/app/service/data-handler.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  products: Product[] = [];
  totalLength: any;
  page: number | undefined;


  constructor(private productService: ProductService,private cartService: CartService, private route: ActivatedRoute, private dataHandler: DataHandlerService) {}

  ngOnInit(): void {
    this.listProducts();
  }

  addItemToCart(product: any) {
    this.cartService.addtoCart(product);
  }
  listProducts(){
    this.productService.getProducts().subscribe(data =>{
      console.log("data=============")
      console.log(data)
      this.products = data;
      console.log(this.page);
      this.dataHandler.productsSubject.subscribe(products => this.products = data);
    })
  }

}
