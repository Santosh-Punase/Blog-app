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
  constructor(private request: BlogPostService,private userReq: AuthenticationService) {
  }


  ngOnInit() {
    this.request.loadBlogs()
      .subscribe( data => {
        // console.log(data);
        this.data = data;
      });
    // console.log(this.data)

    this.currentUser=JSON.parse(localStorage.getItem('curUser'));
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
}
