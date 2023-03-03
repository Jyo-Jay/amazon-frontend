import { Component, OnInit } from '@angular/core';
import { FormControl,Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  signinForm= new FormGroup({
    email: new FormControl("",[Validators.required, Validators.email]),
    password: new FormControl("",[Validators.required])
  })


  constructor(private userService: UsersService, private router:Router) { }


  ngOnInit(): void {}

  get email():FormControl{
    return this.signinForm.get("email") as FormControl
   }

  get password():FormControl{
    return this.signinForm.get("password") as FormControl
  }

  onSubmit():void{

    this.userService.signIn(this.signinForm.value).subscribe(data =>{
      console.log(data);
      localStorage.setItem('userName',data.userid);
      this.router.navigate(['/home']);
    });

    console.log(this.signinForm.value);
    this.signinForm.reset();
  }
}
