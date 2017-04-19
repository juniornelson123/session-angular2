import { Component, OnInit } from '@angular/core';
import { User } from '../_models/user'

import { Session } from '../_config/session'

import { LoginService } from '../_services/login.service'

import { Router } from '@angular/router'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
	user = new User
	session = new Session
  constructor(private loginSevice: LoginService, private router: Router) { }

  ngOnInit() {
  }

  register(){
  	this.loginSevice.signUp(this.user).subscribe(data => {
  		this.session.create(data)
		this.router.navigate(['/'])  		
  	})
  }

}
