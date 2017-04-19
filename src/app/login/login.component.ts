import { Component, OnInit } from '@angular/core';
import { User } from '../_models/user'

import { LoginService } from '../_services/login.service'
import { Router } from '@angular/router'
import { Session } from '../_config/session'
/*



*/
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = new User
  session = new Session
  //private loginService = new LoginService
  constructor(private loginService: LoginService,private router: Router) { }

  ngOnInit() {
  }

  login(){
  	this.loginService.signIn(this.user).subscribe(data => {
  		this.session.create(data)
		this.router.navigate(['/'])  		
    console.log(this.session.authenticated())
    
  	})
  }

}
