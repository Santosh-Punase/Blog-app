import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BlogPostService} from '../blogpost.service';
import {AuthenticationService} from '../authentication.service';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit, OnDestroy{

  data: Object
  category: string;
  private sub: any;
  currentUser: Object;
  loginStatus: boolean;

  constructor(private route: ActivatedRoute, private request: BlogPostService, private userReq: AuthenticationService) { }

  ngOnInit() {
    this.sub = this.route.paramMap.subscribe(param => {
      this.category = param.get('category');
      console.log(this.category);
      this.loadData();
    }); 
    this.loginStatus = this.userReq.isLoggedIn();
    if(this.loginStatus) {
   this.currentUser=JSON.parse(localStorage.getItem('curUser'));
    }
  }
  loadData() {
    this.request.loadBlogs()
      .subscribe( data => {
        this.data = data;
        console.log(this.data);
      });
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
 
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
