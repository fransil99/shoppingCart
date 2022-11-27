import { ImportProvidersSource, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { product } from './product-list/product';
import { ProductListComponent } from './product-list/product-list.component';

@Injectable({
  providedIn: 'root',
})
export class CookiesCartService {
  private _cartList : product[] = [];

  cartList: BehaviorSubject<product[]> = new BehaviorSubject (this._cartList);

  constructor() {}

  addToCart(galletita: product) {
    let item : product|undefined = this._cartList.find((v1) => v1.name == galletita.name);
    if (!item) {
      this._cartList.push({... galletita});
    } else {
      item.quantity += galletita.quantity;
    }
    console.log(this._cartList);
    this.cartList.next(this._cartList);
  }
}
