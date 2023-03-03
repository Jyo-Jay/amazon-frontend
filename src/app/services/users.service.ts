import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, BehaviorSubject } from 'rxjs';
import { User } from '../model/user.model';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
 apiURL='https://amazon-backend-c8eo.onrender.com';
 //apiURL="http://localhost:3000"


  //private currentUser = localStorage.getItem('currentUserId') ? true : false;
  //currentUser$ = new BehaviorSubject<boolean>(this.currentUser);

  private isLoggedIn = localStorage.getItem('currentUserId') ? true : false;
  isLoggedIn$ = new BehaviorSubject<boolean>(this.isLoggedIn);


  constructor(private httpClient: HttpClient) { }

  register({firstName, lastName, address, email, password}:any):Observable<User>{
    return this.httpClient.post<{data :any }> (`${this.apiURL}/users`,{
      firstName , lastName, address, email, password
    }).pipe(
      map(response =>{
         return response.data as User
      }
    ));

  }

  signIn({ email , password}:any):Observable<any>{
    return this.httpClient.post<{message: string , userid:string, token: string}>(`${this.apiURL}/users/login`,{
      email, password
    }).pipe(
      map(response =>{

        localStorage.setItem('currentUserId',response.userid)
        this.isLoggedIn = true;
        this.isLoggedIn$.next(this.isLoggedIn);
        return response;
      }
    ));
  }

  logout(): void {
    localStorage.removeItem('currentUserId');
    this.isLoggedIn = false;
    this.isLoggedIn$.next(this.isLoggedIn);
  }

  getUsers(id:any): Observable<User[]> {
    return this.httpClient.get<{ data: any[]}>(`${this.apiURL}/users/`+id,  {

     }).pipe(
       map(response => {
         return response.data as User[];
       })
     );
   }

 }

