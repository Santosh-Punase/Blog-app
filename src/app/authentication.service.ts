import {EventEmitter, Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

const BASE_URL = 'http://localhost:3000/profiles/';
// https://santosh-blogapp.herokuapp.com/
@Injectable()
export class AuthenticationService {
  loginStatus: EventEmitter<boolean> = new EventEmitter();
  constructor(private _http: Http) {
    if (this.isLoggedIn()) {
      this.loginStatus.emit(true);
    } else {
      this.loginStatus.emit(false);
    }
  }

  isLoggedIn() {
    if (localStorage.getItem('curUser')){
      return true;
    }else{
      return false;
    }
  }

  regUser(data) {
    return this._http.post(BASE_URL, data)
      .map(res => res.json());
  }

  login(username: string, password: string) {
    return this._http.get(BASE_URL)
      .map(res => {
        let userData = res.json();
        var user = userData.find((user) => user.name === username && user.pass1 === password);
        if (user) {
          localStorage.setItem('curUser', JSON.stringify(user));
          this.loginStatus.emit(true);
        }
        return user;
      });
  }

  updateFavourites(data) {
    const fullURL = BASE_URL + `${data.id}`
    return this._http.put(fullURL, data)
      .map(res => res.json());
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('curUser');
    this.loginStatus.emit(false);
  }
}
