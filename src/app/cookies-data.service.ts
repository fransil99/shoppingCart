import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { product } from './product-list/product';
const URL = 'https://638384931ada9475c801e3a4.mockapi.io/api/cookies/cookies'
@Injectable({
  providedIn: 'root'
})
export class CookiesDataService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<product[]>{
    //consumir api rest
    return this.http.get<product[]>(URL)
            .pipe(
              tap( (galletitas: product[]) => galletitas.forEach(galletita => galletita.quantity = 0))
            );
  }
}
