import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from './authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'My Blog ';
  loginStatus: boolean;
  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
    if(this.authService.isLoggedIn()) {
      this.loginStatus = true;
    }
    this.authService.loginStatus.subscribe(res => {
      console.log('res' , res);
      this.loginStatus = res;
    });
  }
  logout() {
    this.authService.logout();
  }
}
