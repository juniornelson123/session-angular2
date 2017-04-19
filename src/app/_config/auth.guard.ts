import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router'
import { Session } from './session'

@Injectable()
export class AuthGuard implements CanActivate{

	private session = new Session
  constructor(private router: Router) { }

  canActivate(){
  	console.log(this.session.authenticated())
    if (this.session.authenticated()) {
  		
  		return true
  	}

  	this.router.navigate(['login'])
  	return false
  }
}
