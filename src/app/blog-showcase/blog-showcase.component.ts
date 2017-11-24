import { Component, OnInit } from '@angular/core';
import {BlogPostService} from '../blogpost.service';

@Component({
  selector: 'app-blog-showcase',
  templateUrl: './blog-showcase.component.html',
  styleUrls: ['./blog-showcase.component.css']
})
export class BlogShowcaseComponent implements OnInit {
 data: Object
  constructor(private request: BlogPostService) {
  }


  ngOnInit() {
    this.request.loadBlogs()
      .subscribe( data => {
        // console.log(data);
        this.data = data;
      });
    // console.log(this.data)
  }

}
