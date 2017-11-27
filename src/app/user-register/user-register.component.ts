import { Component, OnInit } from '@angular/core';
import { BlogPostService } from '../blogpost.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';
import { IUser } from './user';
declare let $: any;

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  myForm: FormGroup;
  registered = false;
  constructor(private request: AuthenticationService, formBuilder: FormBuilder, private route: Router) {
    this.myForm = formBuilder.group({
      'name': [null, Validators.required],
      'email': [null, Validators.required],
      'pass1': [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])],
    });
  }

  ngOnInit() {
  }
  addUser(myForm) {
    console.log(myForm);
    let user = {
      name: myForm.name,
      email: myForm.email,
      pass1: myForm.pass1,
      favourites: []
    }
    this.request.regUser(user).subscribe(data =>
      console.log(data));
    this.registered = true;
    // wait 3 Seconds and hide
    setTimeout(function () {
      this.registered = false;
      this.route.navigate(['/home']);
     // console.log(this.registered);
    }.bind(this), 3000);

  }

}
