import { Component, Input, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  errorMsg=false;
  constructor(private request: AuthenticationService, private route: Router) { }

  ngOnInit() {
  }
  loginUser(form: any) {
    console.log('Form Data: ');
    console.log(form);
    console.log(form.userName);
    console.log(form.userPass);
    this.request.login(form.userName, form.userPass).subscribe(data => {
      if(data) {
        console.log(data);
        this.route.navigate(['/home']);
      } else {
        this.errorMsg = true;
      }
    });
  }
}
