
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.css']
})
export class ViewCartComponent implements OnInit {

  cart$!:any;
  cart : any = [] ;
  updatedCart: any = [];

  product$!: any;
  discountrate:number=10
  total: number = 0;


  constructor( private cartservice:CartService, private router:Router) { }

  ngOnInit(): void {

      let subTotal = 0;
      this.cartservice.viewCartItems(localStorage.getItem('currentUserId')).subscribe( (data:any) =>{
        this.cart$ = data;
          this.cart$.items.forEach( (element:any)=>{
            subTotal =  ((element.productId.productPrice - (element.productId.productPrice * 10/100)) * element.quantity);
            this.total += subTotal;
          })
        console.log(this.total);
        });

   }

  changeQty(id:any , value:string){
    this.cart$.items.forEach((element:any)=> {
        if(element.productId._id == id)
        {
          let qty = element.quantity;

          if(value === 'add')
            this.updatedCart.push({productId:element.productId._id, quantity:qty+1})
          else if (value === 'min')
            this.updatedCart.push({productId:element.productId._id, quantity:qty-1})
        }
        else
        {
          this.updatedCart.push({productId:element.productId, quantity:element.quantity})
        }

    });

    this.cartservice.updateCart(this.updatedCart).subscribe(data=>{
     // console.log(data);
      this.cartservice.increaseCartCounter()
      window.location.reload()
    });


  }


  deleteItem(id:any){
      let updatedCart : any = [];
      this.cart$.items.forEach((element:any)=> {
        if(element.productId._id != id)
        {
            updatedCart.push({productId:element.productId, quantity:element.quantity})
        }
      })
        this.cartservice.updateCart(updatedCart).subscribe(data=>{
          this.cartservice.increaseCartCounter()
          window.location.reload();
        });

  }

  checkOut(){
      alert('Order is Placed !!');
      let userid = localStorage.getItem('currentUserId');
      this.cartservice.getCartItems(userid).subscribe( data=>{
      this.cart = data;

      this.cartservice.orderedItems(userid, this.cart[0].items).subscribe(data=>{
        console.log(data);
      });




      this.router.navigate(['/home']);
    })
  }


}




