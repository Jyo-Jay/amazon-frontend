import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
//import { Product } from '../../model/product.model';
import { ProductService } from '../../services/product.service';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/model/user.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {



styleclass={
  'text-align':'left'
}

styleText={
  'font-weight':'bold',
  'font-size':'14px'
}

 discountrate:number=10

 products$ = this.productservice.getProducts();
 user = localStorage.getItem('currentUserId');


 constructor(private cartService:CartService, private productservice:ProductService,private userService:UsersService, private router:Router) { }


  ngOnInit(): void { }

  show(value:number){
    console.log(value)
  }

  addCartItems(productId:any){

      let userid = localStorage.getItem('currentUserId');

      if(userid)
      {
        this.cartService.getCartItems(userid).subscribe(data=>{

        if(data.length > 0)
        {
          let cartItems : any = [];
          let bool  = false;
          let userItems = data[0];

          userItems.items.forEach((element: any) => {
            if(element.productId == productId)
             {
                bool = true;
                cartItems.push({productId:element.productId, quantity:element.quantity + 1})
             }
            else
             {
                cartItems.push({productId:element.productId,quantity: element.quantity})
             }
          });

          if(!bool){
            cartItems.push({productId:productId,quantity: 1});
           }
            this.cartService.updateCart(cartItems).subscribe(data=>{
            console.log(data);
            });
        }
        else{
            this.cartService.addToCart( userid, productId, 1  )
            .subscribe(data=>{
              console.log(data);
            });
          }
        this.cartService.increaseCartCounter()
      });
      }

    }
  }

