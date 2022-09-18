import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartAboutComponent } from './cart-about/cart-about.component';
import { ShoppingCartProductsComponent } from './shopping-cart-products/shopping-cart-products.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full'
  },
  {
    path: 'products',
    component: ShoppingCartProductsComponent
  },
  {
    path: 'about',
    component: CartAboutComponent 
  },
  {
    path: '**',
    redirectTo: 'products',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
