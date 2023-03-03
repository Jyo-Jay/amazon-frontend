import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  counter!:number
  display: any;
  isLoggedIn$ : any
  userid : any = null
  cart : any;

constructor(private cartservice:CartService, private userService:UsersService) {
    console.log("Header is created")
    this.isLoggedIn$ = this.userService.isLoggedIn$;

  }

ngOnInit(): void {

  this.cartservice.cartCounter$.subscribe({
    next:(value:number) => this.counter=value,
    error:(e:any) => console.error("Error",e),
    complete:() => console.log("Done.")
  })

  let userid = localStorage.getItem('currentUserId');
  this.cartservice.getCartItems(userid).subscribe((data:any)=>{
    this.cart = data;
    if(this.cart[0].userId === userid)
      {
        this.cart[0].items.forEach((element:any)=>{
            this.counter += element.quantity;
        })
      }
      else{
        this.cartservice.cartCounter = 0
        this.cartservice.cartCounter$.next(0)
      }
  });

}

logout(): void {
   this.userService.logout();
  }


}
