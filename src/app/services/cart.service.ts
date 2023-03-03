import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable} from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class CartService {

  apiURL= 'https://amazon-backend-c8eo.onrender.com';

  //apiURL="http://localhost:3000"


  cartCounter:number = 0
  cartCounter$=new BehaviorSubject<number>(this.cartCounter)  // It is one the Spcial type Observable which use value at runtime

  constructor(private httpClient:HttpClient) {
    console.log("Service is created")
   }


  addToCart(userId:any, productId:any, quantity:number): Observable<any>{
      let userid = localStorage.getItem('currentUserId');
      return this.httpClient.post<{data :any[]}>(`${this.apiURL}/cart`, {
        userId : userid, productId, quantity })
        .pipe( map(response =>{
            return response.data
          }));
  }

  getCartItems(userId:any): Observable<any> {
        return this.httpClient.get<{ data: any[] }>(`${this.apiURL}/cart/`+userId, {})
        .pipe(map(response => {
          return response.data
        }));
  }

  viewCartItems(userId:any): Observable<any> {
    return this.httpClient.get<{ data: any[] }>(`${this.apiURL}/cart/viewCart/`+userId, {})
    .pipe(map(response => {
      return response.data
    }));
}

  updateCart(cartItems: any):Observable<any>{
      let userid = localStorage.getItem('currentUserId');
      return this.httpClient.put<{data :any[]}>(`${this.apiURL}/cart/updateCart/`+userid, {
        cartItems: cartItems })
        .pipe(map(response =>{
            return response
          }));

  }

orderedItems(userId:any, cartItems:any): Observable<any>{
    let userid = localStorage.getItem('currentUserId');
    return this.httpClient.post<{data :any[]}>(`${this.apiURL}/order`, {
      userId : userid, items:cartItems })
      .pipe( map(response =>{
          return response.data
        }));
  }

  deleteCart(id: string): Observable<void> {
    return this.httpClient.delete<void>(`${this.apiURL}/cart/${id}`, { });
  }





  increaseCartCounter(){
    this.cartCounter++
    this.cartCounter$.next(this.cartCounter)
  }

}
