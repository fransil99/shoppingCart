import { Component, OnInit } from '@angular/core';
import { CookiesCartService } from '../cookies-cart.service';
import { CookiesDataService } from '../cookies-data.service';
import { product } from './product';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  galletitas: product[] = [];
  
  constructor(
    private cart : CookiesCartService,
    private cookiesDataService: CookiesDataService) { 
    
  }

  ngOnInit(): void {
    this.cookiesDataService.getAll()
    .subscribe(galletitas => this.galletitas = galletitas);
  }
   
  addToCart(galletitas: product): void{
    this.cart.addToCart(galletitas);
    galletitas.stock -= galletitas.quantity;
    galletitas.quantity = 0;  

  }

    maxReached(m: string){
      alert(m);
    }
}
