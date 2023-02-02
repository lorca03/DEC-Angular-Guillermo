import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private loginService:LoginService){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  login(form:NgForm){
    const email=form.value.email
    const password=form.value.password
    console.log(email);
    console.log(password);
    console.log(form.value);
    
    //this.loginService.login(email,password)
  }
}
