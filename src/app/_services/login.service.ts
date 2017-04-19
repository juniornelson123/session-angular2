import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import { Session } from '../_config/session'

import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {
	private session = new Session
	baseUrl = "http://localhost:3000"
  constructor(private http: Http) { }

  signIn(user){
  	return this.http.post(this.baseUrl + "/signin", {email: user.email, password: user.password}).map(res => res.json())
  }

  signUp(user){
  	return this.http.post(this.baseUrl + "/users", user).map(res => res.json())
  }
}
