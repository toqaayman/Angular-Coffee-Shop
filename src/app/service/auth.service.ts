import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { User } from '../data/user';
import { CartService } from '../service/cart.service'

@Injectable()
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false); // {1}
   isLoggedIn$ =  this.loggedIn.asObservable();

  isLoggedIn() {
    let token = localStorage.getItem("token");
    if(token){
      console.log("toooooo")
      this.loggedIn.next(true);
      return true;
    }else{
      this.loggedIn.next(false);
      return false;
    }
  }

  constructor(
    private router: Router,
    private cartService: CartService
  ) {}

  login(){
 //   if (user.email !== '' && user.password !== '' ) { // {3}
      this.loggedIn.next(true);
      this.router.navigate(['/home']);
  //  }
  }

  logout() {
    console.log("logged out")
    localStorage.removeItem("token");
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
    this.cartService.removeAllCart();

  }
}
