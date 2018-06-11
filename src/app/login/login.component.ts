import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare function init_plugins();

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
    // Call this function (script outside angular from javascript file)  to render the sidebar menu from custom.js plugin
    init_plugins();
  }

  login() {
   this.router.navigate(['/dashboard']);
  }

}
