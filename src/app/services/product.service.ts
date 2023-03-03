import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Product } from '../model/product.model'
import { map, Observable } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiURL='https://amazon-backend-c8eo.onrender.com';

   // apiURL="http://localhost:3000"

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
