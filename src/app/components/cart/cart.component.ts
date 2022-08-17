import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public items: any = [];
  public grandTotal: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.getItems()
      .subscribe(res => {
        this.items = res;
        this.grandTotal = this.cartService.getTotalPrice();
      })
  }

  removeItem(item: any) {
    this.cartService.removeCartItem(item);
  }

  emptyCart() {
    this.cartService.removeAllCart();
  }

  checkoutAlert() {
    alert("Thanks for purchasing some coffee!")
    this.cartService.removeAllCart();
  }
}
