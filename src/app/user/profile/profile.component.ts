import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {



 user$ !:any

  constructor(private userService: UsersService) {
   this.userService.getUsers(localStorage.getItem('currentUserId')).subscribe(data => {
       this.user$= data;
    });
  }

  ngOnInit(): void {}

}
