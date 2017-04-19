import { Component } from '@angular/core';
import { NavComponent } from './nav/nav.component';
import { Session } from './_config/session'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
}
