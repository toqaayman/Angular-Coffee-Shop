import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/service/auth.service';
import { CartService } from 'src/app/service/cart.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  toggleMenu = false;
  toggleSearch = false;
  isLoggedIn$: Observable<boolean> | undefined;
  constructor(public cart: CartService, private authService: AuthService) { }

  ngOnInit(): void {
    this.isLoggedIn$ =this.authService.isLoggedIn$
    //  this.authService.isLoggedIn$.subscribe(val=>console.log(val));
  }

  openToggleMenu() {
    this.toggleMenu = !this.toggleMenu;
  }

  openToggleSearch() {
    this.toggleMenu = false;
  }

  closeToggle() {
    this.toggleMenu = false;
  }
  onLogout() {
    this.authService.logout();
  }

}
