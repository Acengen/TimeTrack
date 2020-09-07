import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  email:string;
  password:number;
  isChanged:boolean;

  constructor() { }

  ngOnInit(): void {
  }

  //Template given approch Form
  onSubmit(form:NgForm) {
    this.email = form.value.email;
    this.password = form.value.password;
   
  }
  
  //change a form on a button click if are a member or not.
  changeForm() {
    this.isChanged = !this.isChanged;
  }
}
