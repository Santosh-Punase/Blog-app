import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

const BASE_URL = 'https://santosh-blogapp.herokuapp.com/posts/';
// https://santosh-blogapp.herokuapp.com
// http://localhost:3000
@Injectable()
export class BlogPostService {
 // header = {headers: new Headers({'Content-Type': 'application/json'})};
  constructor(private _http: Http) { }

  loadBlogs() {
    return this._http.get(BASE_URL)
      .map(res => res.json());
  }
  loadBlog(id) {
    return this._http.get(BASE_URL + id)
      .map(res => res.json());
  }
  addBlogs(data) {
    return this._http.post(BASE_URL, data)
      .map(res => res.json());
  }

}
