import { Component, OnInit } from '@angular/core';
import {BlogPostService} from '../blogpost.service';
import {AuthenticationService} from '../authentication.service';

@Component({
  selector: 'app-blog-showcase',
  templateUrl: './blog-showcase.component.html',
  styleUrls: ['./blog-showcase.component.css']
})
export class BlogShowcaseComponent implements OnInit {
 data: Object;
 currentUser: Object;
 loginStatus: boolean;
  constructor(private request: BlogPostService,private userReq: AuthenticationService) {
  }


  ngOnInit() {
    this.request.loadBlogs()
      .subscribe( res => {
        // console.log(data);
        this.data = res;
      });
     console.log(this.data)
     this.loginStatus = this.userReq.isLoggedIn();
     if(this.loginStatus) {
    this.currentUser=JSON.parse(localStorage.getItem('curUser'));
     }
  }
  markFavorite(blog: Object ) {
    if (this.currentUser['favourites'].indexOf(blog['id']) === -1) {
      this.currentUser['favourites'].push(blog['id']);
      localStorage.setItem('curUser', JSON.stringify(this.currentUser));
      this.userReq.updateFavourites(this.currentUser)
        .subscribe(data => {
          console.log(data);
        });
    }
  }
  markUnFavorite(blog: Object) {
    let index = this.currentUser['favourites'].indexOf(blog['id']);
    this.currentUser['favourites'].splice(index, 1);
    localStorage.setItem('curUser', JSON.stringify(this.currentUser));
    this.userReq.updateFavourites(this.currentUser)
      .subscribe(data => {
        console.log(data);
      });
  }
}
