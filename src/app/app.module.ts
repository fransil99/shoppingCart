import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { FormsModule } from "@angular/forms";
import { CartAboutComponent } from './cart-about/cart-about.component';
import { ShoppingCartProductsComponent } from './shopping-cart-products/shopping-cart-products.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';
import { CookiesCartComponent } from './cookies-cart/cookies-cart.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    CartAboutComponent,
    ShoppingCartProductsComponent,
    InputIntegerComponent,
    CookiesCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
