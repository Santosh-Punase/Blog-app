import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BlogPostService} from '../blogpost.service';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit, OnDestroy{

  data: Object
  category: string;
  private sub: any;
  constructor(private route: ActivatedRoute, private request: BlogPostService) { }

  ngOnInit() {
    this.sub = this.route.paramMap.subscribe(param => {
      this.category = param.get('category');
      console.log(this.category);
      this.loadData();
    });
  }
  loadData() {
    this.request.loadBlogs()
      .subscribe( data => {
        this.data = data;
        console.log(this.data);
      });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
