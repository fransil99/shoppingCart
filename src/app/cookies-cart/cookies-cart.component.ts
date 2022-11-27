import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { CookiesCartService } from '../cookies-cart.service';
import { product } from '../product-list/product';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-cookies-cart',
  templateUrl: './cookies-cart.component.html',
  styleUrls: ['./cookies-cart.component.scss']
})
export class CookiesCartComponent implements OnInit {
  
  cartList$: Observable<product[]>;
  constructor(private cart : CookiesCartService) { 
  this.cartList$ = cart.cartList.asObservable();
  }

  ngOnInit(): void {
  }

}
