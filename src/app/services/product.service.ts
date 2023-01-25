import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Product } from '../model/product.model'
import { map, Observable } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiURL="http://localhost:3000"
  //apiURL="/my-amazon/assets/product.json"

  constructor(private http:HttpClient) { }

  getProducts(): Observable<Product[]> {
   return this.http.get<{ data: any[] }>(`${this.apiURL}/products`, {
    }).pipe(
      map(response => {
        return response.data as Product[];
      })
    );
  }
}
