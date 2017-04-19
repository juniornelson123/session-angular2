import { Component, OnInit } from '@angular/core';
import { Session } from '../_config/session'
import { Router } from '@angular/router'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class NavComponent implements OnInit {
  private session = new Session  
  constructor(private router: Router) { }
  //constructor() { }

  ngOnInit() {
  }

  isAuthenticated(){
  	if (this.session.authenticated()) {
  		return true
  	}else{
  		return false
  		
  	}

  	//return this.session.authenticated()
  
  }

  logout(){
    this.session.logout()
    this.router.navigate(['/'])
    console.log(this.session.authenticated())
  }
}
