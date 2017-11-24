import {Component, Input, OnInit} from '@angular/core';
import {AuthenticationService} from '../authentication.service';


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(private request: AuthenticationService) { }

  ngOnInit() {
  }
  loginUser(form: any) {
    console.log('Form Data: ');
    console.log(form);
    console.log(form.userName);
    console.log(form.userPass);
    this.request.login(form.userName, form.userPass).subscribe(data => console.log(data['id']));
  }
}
